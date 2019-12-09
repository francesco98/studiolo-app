import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  BackHandler,
  FlatList, Button
} from 'react-native'
import AppBar from '../Component/AppBar'
import StudentCard from '../Component/StudentCard'
import HomeController from '../../Controller/HomeController'
import User from '../../Model/User';
import BackgroundTask from 'react-native-background-task'
import queueFactory from 'react-native-queue';
import AsyncStorage from '@react-native-community/async-storage'

BackgroundTask.define(async () => {

  // Init queue
  queue = await queueFactory();

  // Register job worker
  queue.addWorker('sum-status', async (id, status) => {

    AsyncStorage.setItem('prova', status+5)

  });

  // Start the queue with a lifespan
  // IMPORTANT: OS background tasks are limited to 30 seconds or less.
  // NOTE: Queue lifespan logic will attempt to stop queue processing 500ms less than passed lifespan for a healthy shutdown buffer.
  // IMPORTANT: Queue processing started with a lifespan will ONLY process jobs that have a defined timeout set.
  // Additionally, lifespan processing will only process next job if job.timeout < (remainingLifespan - 500).
  await queue.start(25000); // Run queue for at most 25 seconds.

  // finish() must be called before OS hits timeout.
  BackgroundTask.finish();

});


export default class HomePage extends Component {
  _homeController = new HomeController()

    constructor(props) {
    super(props);

    queueFactory()
      .then(queue => {
        this.setState({queue});
      });
      }

  

  state = { data: [],  
  queue: null,//PROVA SERVICE
  status: 0,
  }

  _scanQRCode(){
    const { navigate } = this.props.navigation
    navigate('Scan', {})
  }

  _retrieveStatus(){
   AsyncStorage.getItem('prova').then((value) => setState({'status' : value}));
  }

  createPrefetchJobs() {

    // Create the prefetch job 
    this.state.queue.createJob(
      'sum-status',
      { status: this.state.status }, // Supply the image url we want prefetched in this job to the payload.
      { attempts: 5, timeout: 15000 }, // Retry job on failure up to 5 times. Timeout job in 15 sec (prefetch is probably hanging if it takes that long).
      false // Must pass false as the last param so the queue starts up in the background task instead of immediately.
    );
    }

  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    BackgroundTask.schedule();

    this._homeController
      .getStudentCenterInfo()
      .then(d => {
        this.setState({ data: d })
      })
      .catch(error => {
        alert(error)
      })
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
  }

  handleBackButton () {
    return true
  }
  

  render () {
    // TODO: FlatList Styling
    return (
      <SafeAreaView>
      
        <AppBar />
        <Button title={'toggle status'} onPress={ this.createPrefetchJobs.bind(this), this._retrieveStatus() }></Button>
        <Text>{this.state.status}</Text>
        <View>
          <Text style={styles.text}>
            {User.getInstance()
              .getPlace()
              .getName()}
          </Text>
        </View>
        <View style={{}}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <StudentCard
                studentName={item.name}
                freeSits={item.free}
                data={item.lastUpdateDay}
                ora={item.lastUpdateHour}
                total={item.nposti}
                onScanQRCode={() => this._scanQRCode()}
              />
            )}
          />
        </View>
      </SafeAreaView>
    )
  }
}
// CONSTANTS

const styles = StyleSheet.create({
  text: {
    padding: 30,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Lato-Light'
  }
})
