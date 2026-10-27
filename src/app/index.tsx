import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { api } from '../services/api';
import { styles } from '../styles/HomeScreen';

interface Modelo {
    id: string;
    name: string;
    groupName: string;
    algorithm: string;
}

export default function HomeScreen() {
    const router = useRouter();
    const [models, setModels] = useState<Modelo[]>([]);

    async function fetchModels() {
        try {
            const response = await api.get('/api/v1/models');
            setModels(response.data.items);
        } catch (error) {
            console.error("Erro ao buscar modelos:", error);
        }
    }

    useEffect(() => {
        fetchModels();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Monitor de Qualidade</Text>
            {/* 2. Um subtítulo de UX! Convida o usuário a agir: */}
            <Text style={styles.subtitle}>
                Selecione um modelo de inteligência abaixo para testar a sua conexão.
            </Text>

            {models.map((modelo) => (
                <TouchableOpacity 
                    key={modelo.id} 
                    style={styles.card}
                    onPress={() => router.push({ pathname: '/forecast', params: { idDoModelo: modelo.id } })}
                >
                    {/* PARTE ESQUERDA: O Ícone */}
                    <View style={styles.cardIconContainer}>
                        <Feather name="cpu" size={24} color="#1C4A3C" />
                    </View>

                    {/* PARTE DO MEIO: Textos */}
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>{modelo.name}</Text>
                        <Text style={styles.cardSubtitle}>{modelo.algorithm}</Text>
                    </View>

                    {/* PARTE DIREITA: A Seta de navegação */}
                    <Feather name="chevron-right" size={20} color="#CCC" />
                </TouchableOpacity>
            ))}
        </View>
    )
}