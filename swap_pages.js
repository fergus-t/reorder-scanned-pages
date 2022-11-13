
function organizepages() {
    var numofPages = this.numPages;
    var numofOddPages = Math.floor(numofPages/2);

    //go to the first page.
    this.pageNum = 0; 

    for(i = 0; i < numofOddPages; i++) {
        this.movePage(numofPages-1, i*2);
    }
    app.alert("Page order swapped!", 3);
    return "Success";
}
organizepages();
