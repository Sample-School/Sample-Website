export function AboutTitle() {
  return (
    <h2
      style={{
        backgroundColor: '#00A7A7',
        color: 'white',
        padding: '25px 24px',
        borderTopRightRadius: '100px',    // 🟢 Borda superior direita
        borderBottomRightRadius: '20px', // 🟢 Borda inferior direita
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0',
        display: 'inline-block',
        marginBottom: '24px',
        fontSize: '1.8rem',
        fontWeight: 'bold',
        textAlign: 'right',
        paddingRight: '5%',
        marginTop: '5%',
        width: '40%',         // 🟢 Largura de 40%
        position: 'relative', // Necessário para usar `left`
        left: '-10%'          // 🟢 Move 10% para a esquerda
      }}
    >
      SOBRE NÓS
    </h2>
  );
}
