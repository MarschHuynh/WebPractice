$(document).ready(function(){
  var table = $('table > tbody')

  table.find('tr').each(function(){
    var tdarr = $(this).find('td');
    var ID = tdarr.eq(0).text()
    var Name = tdarr.eq(1).text()
    var Group = tdarr.eq(2).text()
    var button = tdarr.eq(3).find('.button_Show');
    button.click(function(){
      alert("Information\n"+ "ID: " + ID + "\n" +"Name: "+ Name + "\n" + "Group: " + Group);
    })
  })
});
