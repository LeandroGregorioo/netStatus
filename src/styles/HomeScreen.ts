import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 60, // O famoso respiro do topo para não colar no relógio
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1C4A3C', // Um verde escuro, cor da marca
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 25,
        lineHeight: 22,
    },
    card: {
        flexDirection: 'row', // <-- O Segredo: Alinha os itens lado a lado
        alignItems: 'center', // <-- Centraliza eles na altura
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    cardIconContainer: {
        backgroundColor: '#E8F1EF', // Fundo verdinho claro para destacar o ícone
        padding: 12,
        borderRadius: 12,
        marginRight: 15,
    },
    cardContent: {
        flex: 1, // Faz a parte do texto "empurrar" a setinha lá pro final da direita
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    cardSubtitle: {
        fontSize: 14,
        color: '#777',
        marginTop: 2,
    }
});