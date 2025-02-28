let arr = [
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100",
      title: "Grocery",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100",
      title: "Mobiles",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100",
      title: "Fashion",
      href:'Product.html'
    },
    ,
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100",
      title: "Electronics",
    },
    ,
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100",
      title: "Home and Furtinure",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/0ff199d1bd27eb98.png?q=100",
      title: "Appliances",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100",
      title: "Travel",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100",
      title: "Beauty,Toys and More",
      href: "",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100",
      title: "Two Wheelers",
      href: "",
    },
  ];

  arr.map((element)=>{
    let image = document.createElement('img');
    image.src = element.img_src;
    
    let title = document.createElement("p");
    title.innerHTML = element.title;
   
    let box = document.createElement('div');
    
    box.append(image,title);
    
   document.getElementById("categories").append(box);
  
  })

  
  let arr1 = [
    {
      img_src:
        "https://rukminim1.flixcart.com/image/120/120/kcf4lu80/speaker/mobile-tablet-speaker/h/u/f/srs-xb23-sony-original-imaftk66vjxp86h5.jpeg?q=90",
      title: "Best Selling Mobile",
      subtitle: "From &#8377;499*",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/image/120/120/xif0q/printer/r/0/8/hl-l2321d-ind-brother-original-imah3d3b9exz7ejf.jpeg?q=90",
      title: "Printers",
      subtitle: "From &#8377;10190*",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/image/120/120/l58iaa80/headphone/k/z/m/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg?q=90",
      title: "Best Truewireless",
      subtitle: "Grab Now",
    },
    ,
    {
      img_src:
        "https://rukminim1.flixcart.com/image/120/120/krwec280/role-play-toy/z/f/w/kids-camera-mini-rechargeable-and-shockproof-camera-creative-diy-original-imag5h7gdjzrvzdr.jpeg?q=90",
      title: "Top Mirrorles",
      subtitle: "Shop Now!",
    },
    ,
    {
      img_src:
        "https://rukminim1.flixcart.com/image/120/120/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=90",
      title: "Best of Shavers",
      subtitle: "From &#8377;1649*",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/image/120/120/xif0q/projector/8/v/g/i9-pro-10-ei9027-led-projector-egate-original-imah5f7xgdsqhb9d.jpeg?q=90",
      title: "Projectors",
      subtitle: "From &#8377;4999*",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/image/120/120/xif0q/monitor/0/1/5/-original-imagwcddyrshqve9.jpeg?q=90",
      title: "Monitor",
      subtitle: "From &#8377;8279*",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/image/120/120/xif0q/smartwatch/x/l/3/-original-imahy7fh7nbgud85.jpeg?q=90",
      title: "boAT Smartwatches",
      subtitle: "From &#8377;999*",
    },
  ];

  arr1.map((element)=>{
    let image = document.createElement('img');
    image.src = element.img_src;

    let picture = document.createElement('div');
    picture.append(image);
    
    let title = document.createElement("h6");
    title.innerHTML = element.title;

    let subtitle = document.createElement("p");
    subtitle.innerHTML = element.subtitle;
   
    let box = document.createElement('div');
    
    box.append(picture,title,subtitle);
    
   document.getElementById("ele").append(box);
  
  })

  
  // Get necessary elements
  const loginButton = document.querySelector('.login-button');
  const dropdownContent = document.querySelector('.dropdown-content');
  const arrow = document.querySelector('.arrow');

  // Toggle dropdown on button click
  loginButton.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent event from bubbling up
      dropdownContent.classList.toggle('show');
      arrow.classList.toggle('up');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
      if (!e.target.closest('.login-container')) {
          dropdownContent.classList.remove('show');
          arrow.classList.remove('up');
      }
  });

  // Prevent dropdown from closing when clicking inside it
  dropdownContent.addEventListener('click', (e) => {
      e.stopPropagation();
  });