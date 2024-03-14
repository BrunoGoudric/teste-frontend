export function formatTimestampToDate(timestamp: number) {
    const data = new Date(timestamp * 1000);
  
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
  
    // Adicionando um zero à esquerda para dia e mês se necessário
    const diaFormat = dia < 10 ? '0' + dia : dia;
    const mesFormat = mes < 10 ? '0' + mes : mes;
  
    // Formatando a data no padrão "dd/MM/YYYY"
    var dataFormatada = diaFormat + '/' + mesFormat + '/' + ano;
  
    return dataFormatada;
  }