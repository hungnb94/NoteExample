import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";
import AllNoteContainer from './allnote/AllNoteContainer';
import NoteDetailContainer from './notedetail/NoteDetailContainer';

const AppNavigator = createStackNavigator({
    Home: {
        screen: AllNoteContainer
    },
    Details: {
        screen: NoteDetailContainer
    }
});

const AppContainer =  createAppContainer(AppNavigator);
export default AppContainer
