import { StyleSheet } from 'react-native';

export const forecastStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5F5',
        paddingTop: 60,
    },
    highlightText: {
        fontSize: 16,
        color: '#0056b3',
        fontWeight: 'bold',
        marginBottom: 10, // dei um espacinho extra aqui embaixo
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    qualityTitle: {
        fontSize: 18,
        marginTop: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    recommendationText: {
        marginTop: 10,
        fontSize: 15,
        color: '#555',
    },
    detailsHeader: {
        marginTop: 30,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#222',
        marginBottom: 5,
    },
    detailsText: {
        fontSize: 14,
        color: '#444',
        marginTop: 4,
    },
    // --- Nossos Novos Estilos (Repare na vírgula ali em cima) ---
    card: {
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 16,
        marginTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 14,
        color: '#555',
        marginBottom: 12,
    },
    badge: {
        backgroundColor: '#FDF3E1', 
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    badgeText: {
        color: '#B07015',
        fontWeight: 'bold',
        fontSize: 16,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    detailValue: {
        fontWeight: 'bold',
        color: '#333',
    },
       
    actionButton: {
        backgroundColor: '#1C4A3C', // Aquele verde escuro do protótipo
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 15,
    },
    actionButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 14,
    },
});