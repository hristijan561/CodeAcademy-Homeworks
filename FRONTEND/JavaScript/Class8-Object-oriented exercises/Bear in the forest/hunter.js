function Hunter(){
    var kill;
    this.hunt = function(bear){
        if(bear.isFat){
            bear.bearIsKilled();
            kill = true;
        }else{
            bear.bearEscaped();
            kill = false;
        }
        return kill;
    }
}