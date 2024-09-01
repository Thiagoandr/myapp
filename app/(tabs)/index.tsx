import { Text, View } from 'react-native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function App() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#131016',
            padding: 24
        }}>
            <View style={{
                flexDirection: 'row', 
                alignItems: 'center',  
                marginTop: 48,
            }}>
                <Text style={{
                    color: '#fff',
                    fontSize: 24,
                    fontWeight: 'bold',
                }}>
                    Nome do evento 
                </Text>
                <MaterialCommunityIcons 
                    name="calendar-month" 
                    size={24} 
                    color="#d3d3d3" 
                    style={{ marginLeft: 8 }} 
                />
            </View>

            <Text style={{
                color: '#6b6b6b',
                fontSize: 16,
                marginTop: 4, 
            }}>
                Domingo, 1/08/2024
            </Text>
        </View>
    );
}