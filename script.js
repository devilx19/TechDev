document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const list = document.getElementById('list');
    const items = list.getElementsByTagName('li');

    searchInput.addEventListener('input', function () {
      const searchTerm = searchInput.value.toLowerCase();

      for (let i = 0; i < items.length; i++) {
        const itemText = items[i].textContent.toLowerCase();

        if (itemText.includes(searchTerm)) {
          items[i].style.display = 'block';
        } else {
          items[i].style.display = 'none';
        }
      }
    });
  });

  // function myfunction(){
  //   var input,filter,ul,li,a,i,textvalue;
  //   input = document.getElementById("searchInput").value;
  //   filter = input.toUpperCase();
  //   ul = document.getElementById("list");
  //   li = ul.getElementsByTagName("li");


  //   for( i = 0 ; i < li.length ; i++){
  //     a = li[i].getElementsByTagName("a")[0];
  //     textvalue = a.textContent || a.innerText;
  //     if(textvalue.toUpperCase().indexOf(filter) > -1){
  //       li[i].style.display = "";
  //     } 
  //     else{
  //       li[i].style.display = "none";
  //     }
  //   }
  // }