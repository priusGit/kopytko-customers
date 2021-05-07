function getDate(){
    let date = new Date();
    let day = String(date.getDate());
    let month = String(date.getMonth() + 1);
    let year = String(date.getFullYear());
    if (date.getDate() < 10) {
      day = "0" + day;
    }
    if (date.getMonth() + 1 < "10") {
      month = 0 + month;
    }
    return year + "-" + month + "-" + day;
}
export default getDate;