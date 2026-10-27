import { StyleSheet } from 'react-native';

export const activityStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 60,
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1C4A3C',
        marginBottom: 20,
    },
    // --- Opções de Atividade ---
    optionCard: {
        flexDirection: 'row',    // Ícone + Texto lado a lado
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 2,
        borderColor: '#E0E0E0', // Cinza padrão
    },
    optionText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#444',
        marginLeft: 15,          // Espaço entre o ícone e o texto
    },
    // --- Botão de Envio ---
    submitButton: {
        backgroundColor: '#1C4A3C',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 30,
    },
    submitButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    // --- Área de Data e Hora ---
    whenLabel: {
        marginTop: 25,
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },
    dateDisplay: {
        marginTop: 8,
        fontSize: 15,
        color: '#555',
        fontWeight: 'bold',
        marginLeft: 5,
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    dateButton: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        marginHorizontal: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
    },
    dateButtonText: {
        color: '#333',
        fontSize: 14,
        fontWeight: '500',
    },
});