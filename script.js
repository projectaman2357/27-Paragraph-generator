const text = [
    'hii every one my anme is aman tiwari.',
    'project.aman is just developing a text generstor for you.',
    'search on instagram project.aman and follow.',
    'i am a software developer.',
    'also i am pursuing computer science and enginerring from iimt college of engineering greater noida.',
    'thank you for visiting a my project.aman text generator web page.',
    'Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.',
    'Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula luctus aliquet.',
    'Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.',
    'Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  ];
  
  const form = document.querySelector(".lorem-form");
  const numopara = document.getElementById("numofpara");
  const numofparaRange = document.getElementById("numofparaRange");
  const result = document.querySelector(".lorem-text");
  
  function syncParaNumbers(e){
      const value = e.target.value;
      console.log(value);
      numopara.value = value;
      numofparaRange.value = value;
  }
  
  form.addEventListener('submit', e =>{
      e.preventDefault();
      const value = parseInt(numopara.value);
      let tempText = text.slice(0, value);
      tempText = tempText.map(item => `<p class="result">${item}</p>`).join("");
      result.innerHTML = tempText;
  })
  
  numopara.addEventListener('input', syncParaNumbers);
  numofparaRange.addEventListener('input', syncParaNumbers);