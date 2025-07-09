export const dateFormat=(isoString:string)=>{
    const dateObj = new Date(isoString);
    
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = String(dateObj.getFullYear()).slice(-2); // Get last two digits
    
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate
}
