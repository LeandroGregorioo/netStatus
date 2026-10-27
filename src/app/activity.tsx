import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

import { api } from '../services/api';
import { activityStyles } from '../styles/activity';

export default function ActivityScreen() {
    const { idDoModelo } = useLocalSearchParams();
    const [selectedActivity, setSelectedActivity] = useState('VIDEO_CALL');

    // --- Memórias do Calendário / Relógio ---
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState<'date' | 'time'>('date');
    const [show, setShow] = useState(false);

    // Quando o usuário confirma a data/hora
    const handleConfirm = (event: any, selectedDate?: Date) => {
        setShow(false);
        if (selectedDate) {
            setDate(selectedDate);
        }
    };

    // Quando o usuário cancela
    const handleDismiss = () => {
        setShow(false);
    };

    // --- Requisição POST ---
    async function handleCheckActivity() {
        try {
            const dadosParaEnviar = {
                model_id: idDoModelo,
                activity: selectedActivity,
                latitude: -23.55,
                longitude: -46.63,
                dateTime: date.toISOString()
            };

            const response = await api.post('/api/v1/activity/check', dadosParaEnviar);

            const internetAguenta = response.data.suitable;
            const mensagemDaApi = response.data.recommendation.message;

            if (internetAguenta === true) {
                Alert.alert("Tudo Certo! ✅", mensagemDaApi);
            } else {
                Alert.alert("Atenção ⚠️", mensagemDaApi);
            }
        } catch (error: any) {
            console.log("Erro:", JSON.stringify(error.response?.data, null, 2));
            Alert.alert("Ops!", "Não foi possível verificar a atividade agora.");
        }
    }

    return (
        <View style={activityStyles.container}>
            <Text style={activityStyles.title}>O que você pretende fazer?</Text>

            {/* OPÇÃO 1: CHAMADA DE VÍDEO */}
            <TouchableOpacity
                style={[
                    activityStyles.optionCard,
                    selectedActivity === 'VIDEO_CALL' && { borderColor: '#1C4A3C', backgroundColor: '#F2F9F6' }
                ]}
                onPress={() => setSelectedActivity('VIDEO_CALL')}
            >
                <Feather
                    name="video"
                    size={24}
                    color={selectedActivity === 'VIDEO_CALL' ? '#1C4A3C' : '#888'}
                />
                <Text style={[
                    activityStyles.optionText,
                    selectedActivity === 'VIDEO_CALL' && { color: '#1C4A3C', fontWeight: 'bold' }
                ]}>
                    Chamada de Vídeo
                </Text>
            </TouchableOpacity>

            {/* OPÇÃO 2: STREAMING */}
            <TouchableOpacity
                style={[
                    activityStyles.optionCard,
                    selectedActivity === 'STREAMING' && { borderColor: '#1C4A3C', backgroundColor: '#F2F9F6' }
                ]}
                onPress={() => setSelectedActivity('STREAMING')}
            >
                <Feather
                    name="monitor"
                    size={24}
                    color={selectedActivity === 'STREAMING' ? '#1C4A3C' : '#888'}
                />
                <Text style={[
                    activityStyles.optionText,
                    selectedActivity === 'STREAMING' && { color: '#1C4A3C', fontWeight: 'bold' }
                ]}>
                    Assistir Streaming
                </Text>
            </TouchableOpacity>

            {/* ÁREA DE DATA E HORA */}
            <Text style={activityStyles.whenLabel}>Quando?</Text>

            <Text style={activityStyles.dateDisplay}>
                {date.toLocaleDateString('pt-BR')} às {date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
            </Text>

            <View style={activityStyles.dateContainer}>
                <TouchableOpacity style={activityStyles.dateButton} onPress={() => { setMode('date'); setShow(true); }}>
                    <Feather name="calendar" size={16} color="#555" />
                    <Text style={activityStyles.dateButtonText}>Escolher Data</Text>
                </TouchableOpacity>

                <TouchableOpacity style={activityStyles.dateButton} onPress={() => { setMode('time'); setShow(true); }}>
                    <Feather name="clock" size={16} color="#555" />
                    <Text style={activityStyles.dateButtonText}>Escolher Horário</Text>
                </TouchableOpacity>
            </View>

            {/* Modal nativo do calendário/relógio */}
            {show && (
                <DateTimePicker
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onValueChange={handleConfirm}
                    onDismiss={handleDismiss}
                />
            )}

            {/* BOTÃO DE VERIFICAÇÃO */}
            <TouchableOpacity style={activityStyles.submitButton} onPress={handleCheckActivity}>
                <Text style={activityStyles.submitButtonText}>Verificar atividade</Text>
            </TouchableOpacity>
        </View>
    );
}