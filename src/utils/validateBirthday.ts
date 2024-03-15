export function validateBirthday(value: Date) {
    const today = new Date();
    
    // Verificar se a data de aniversário é uma data válida
    if (isNaN(value.getTime())) {
      return false;
    }
    
    // Verificar se a data de aniversário é no passado
    if (value >= today) {
      return false;
    }
  
    return true;
  }