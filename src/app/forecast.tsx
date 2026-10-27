import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { api } from '../services/api';
import { forecastStyles } from '../styles/forecast';

interface ForecastData {
    model: { name: string };
    assessment: { quality: string };
    recommendation: { message: string };
    prediction: { 
        predictedAvgRttMs: number; 
        predictedPacketLossPct: number; 
    };
    matchedProbe: { distanceKm: number };
}

export default function ForecastScreen() {
    const { idDoModelo } = useLocalSearchParams();
    const router = useRouter(); 
    const [forecast, setForecast] = useState<ForecastData | null>(null);

    // --- FUNÇÃO DAS CORES DINÂMICAS ---
    function getBadgeInfo(quality: string) {
        if (quality === 'GOOD') {
            return { bg: '#D1E7DD', text: '#0F5132', label: 'Boa' }; // Verde
        } else if (quality === 'UNSTABLE') {
            return { bg: '#F8D7DA', text: '#842029', label: 'Instável' }; // Vermelho
        } else {
            return { bg: '#FFF3CD', text: '#664D03', label: 'Moderada' }; // Amarelo
        }
    }

    async function fetchForecast() {
        try {
            const response = await api.get(`/api/v1/forecasts/nearby?lat=-23.55&lon=-46.63&model_id=${idDoModelo}`);
            setForecast(response.data);
        } catch (error) {
            console.error("Erro ao buscar a previsão:", error);
        }
    }

    useEffect(() => {
        fetchForecast();
    }, []);

    if (!forecast) {
        return (
            <View style={forecastStyles.loadingContainer}>
                <Text>Carregando a sua previsão...</Text>
            </View>
        );
    }

    // Para deixar o código super limpo, calculamos a cor exata aqui fora do HTML
    const badgeInfo = getBadgeInfo(forecast.assessment.quality);

    return (
        <View style={forecastStyles.container}>
            <Text style={forecastStyles.highlightText}>
                Modelo em uso: {forecast.model.name}
            </Text>
            
            {/* CARTÃO 1: QUALIDADE */}
            <View style={forecastStyles.card}>
                <Text style={forecastStyles.sectionTitle}>Qualidade esperada</Text>
                
                {/* A PÍLULA INTELIGENTE APLICANDO AS CORES CALCULADAS */}
                <View style={[forecastStyles.badge, { backgroundColor: badgeInfo.bg }]}>
                    <Text style={[forecastStyles.badgeText, { color: badgeInfo.text }]}>
                        ! {badgeInfo.label}
                    </Text>
                </View>

                <Text style={forecastStyles.recommendationText}>
                    {forecast.recommendation.message}
                </Text>

                <TouchableOpacity 
                    style={forecastStyles.actionButton} 
                    onPress={() => router.push({ pathname: '/activity', params: { idDoModelo: idDoModelo } })}
                >
                    <Text style={forecastStyles.actionButtonText}>Planejar uma atividade</Text>
                </TouchableOpacity>
            </View>

            {/* CARTÃO 2: DETALHES TÉCNICOS */}
            <View style={forecastStyles.card}>
                <Text style={forecastStyles.sectionTitle}>Detalhes da previsão</Text>
                <View style={forecastStyles.detailRow}>
                    <Text style={forecastStyles.detailsText}>Latência prevista</Text>
                    <Text style={forecastStyles.detailValue}>{forecast.prediction.predictedAvgRttMs} ms</Text>
                </View>
                <View style={forecastStyles.detailRow}>
                    <Text style={forecastStyles.detailsText}>Perda prevista</Text>
                    <Text style={forecastStyles.detailValue}>{forecast.prediction.predictedPacketLossPct} %</Text>
                </View>
            </View>
            
            {/* CARTÃO 3: REFERÊNCIA */}
            <View style={forecastStyles.card}>
                <Text style={forecastStyles.sectionTitle}>Referência de medição</Text>
                <Text style={forecastStyles.detailsText}>
                    Probe a aproximadamente {forecast.matchedProbe.distanceKm} km
                </Text>
            </View>
            
        </View>
    );
}