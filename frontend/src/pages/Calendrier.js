// import "./Calendrier.css";
import React,{ useState, useEffect } from 'react';
import { ScheduleComponent  , Day, Week, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import axios from 'axios';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

export default function Calendrier (props) {
  
  // const [datas,setDatas] =React.useState({})
  // const [eventSettingss , setEventSettings] = React.useState([]);
  
  const [dataManager, setDataManager] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      // const manager = new DataManager({
      //   url: await axios.get('http://127.0.0.1:8000/api/taskes'),
      //   adaptor: new ODataV4Adaptor()
      // });
      // await manager.ready;
      // setDataManager(manager);
      // const manager = await axios.get('http://127.0.0.1:8000/api/taskes')
      // setDataManager(manager.data.taskes);
      console.log('====================================');
      console.log(dataManager);
      console.log('====================================');
    };
    fetchData();
   
  }, []);
  // const eventSettings = { dataSource: dataManager };

  // const eventSettings = { dataSource: {} }

//   React.useEffect(() => {
//     afficher()
// }, []);

//     async function afficher(){
//       const resultat = await axios.get('http://127.0.0.1:8000/api/taskes')
//       if (resultat.data.status === 200){
//         setDatas(resultat.data.taskes)
        // console.log(datas)
        // datas.map((data) => (
        // //   // console.log(data.titre)
        //  setEventSettings([...eventSettingss ,{
        //   'Id': data.id,
        //   'Subject': data.titre,
        //   'StartTime': new Date(2023, 5, 15, 9, 30),
        //   'EndTime': new Date(2023, 5, 15, 11, 0)
        // } ] )
        //  ))
    //   }
    // }
    // datas.map((data) => (
    //   // console.log(data.titre)
    //  setEventSettings([...eventSettingss ,{
    //   'Id': data.id,
    //   'Subject': data.titre,
    //   'StartTime': new Date(2023, 5, 15, 9, 30),
    //   'EndTime': new Date(2023, 5, 15, 11, 0)
    // } ] )
    //  ))
    // const eventSettings = { dataSource: eventSettingss }


    
    // props.todos.map((todo, index) => (
      // setData(...todo,todo)
      let data = [{
        Id: 1,
        Subject: 'Go to the office',
        StartTime: new Date(2023, 5, 15, 9, 30),
        EndTime: new Date(2023, 5, 15, 4, 0)
    }, {
        Id: 2,
        Subject: 'Meeting for new project',
        StartTime: new Date(2023, 5, 12, 12, 0),
        EndTime: new Date(2023, 5, 12, 14, 0)
    },
    {
      id: 3,
      Subject: 'Shopping',
      StartTime: new Date(2023, 5, 15, 12, 30),
      EndTime: new Date(2023, 5, 15, 14, 0)
    }];
    const eventSettings = { dataSource: data }
    // ))
// }, []);

  
  return (
    <>
    <ScheduleComponent width='70%' height='800px' currentView='Month' readonly={true} eventSettings={eventSettings} >
       <Inject  services={[Day, Week, Month, Agenda]}    />
    </ScheduleComponent>
    </>
  );
}