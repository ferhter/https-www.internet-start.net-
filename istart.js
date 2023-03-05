
start https://internet-start.net/

winget install --id Git.Git -e --source winget

git init.
$ git config --global user."alaikum226"

$ git config --global user.email alaikum226@gmail.com
winget install --id Git.Git -e --source winget
 

git clone https://github.com/git/git

winget install --id Git.Git -e --source winget
$ git init
$ git add *.c
$ git add LICENSE
$ git commit -m 'initial project version'
$ git clone https://github.com/libgit2/libgit2

 $ git clone https://github.com/libgit2/libgit2 mylibgit
 

[Unit]
Description=Start Git Daemon

[Service]
ExecStart=/usr/bin/git daemon --reuseaddr --base-path=/srv/git/ /srv/git/ 
START https://internet-start.net/?utm_source=beetle&utm_medium=browser&utm_campaign=istart_startpage
Restart=always
RestartSec=500ms

StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=git-daemon

User=git
Group=git

[Install]
WantedBy=multi-user.target

$ cd /path/to/project.git
$ touch git-daemon-export-ok

<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta property="og:image" content="https://bitcoin.org/img/icons/opengraph.png?1677593322" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<title>Bitcoin - Dinero P2P de código abierto</title>
<meta name="description" content="Bitcoin es una red innovativa de pagos y un nuevo tipo de dinero. Encuentra todo lo que necesitas saber e inicia con Bitcoin en bitcoin.org.">
<link rel="stylesheet" href="/css/font-awesome-4.4.0/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/main.css?1677593322">
<!--[if lt IE 8]><link rel="stylesheet" href="/css/ie.css"><script type="text/javascript" src="/js/ie.js"></script><![endif]-->
<!--[if IE 8]><link rel="stylesheet" href="/css/ie8.css"><![endif]-->


<script type="text/javascript" src="/js/base.js?1677593322"></script>
<script type="text/javascript" src="/js/main.js?1677593322"></script>
<script src="/js/jquery/jquery-1.11.2.min.js"></script>
<script src="/js/jquery/jquery-ui.min.js"></script>
<script src="/js/jquery/jquery.qrcode.min.js"></script>
<link rel="shortcut icon" href="/favicon.png?1677593322">
<link rel="apple-touch-icon-precomposed" href="/img/icons/logo_ios.png?1677593322"/>
<script>
    window.cookieconsent_options = {
        theme: 'light-floating'
    }
</script>
<script type="text/javascript" src="/js/cookieconsent/cookieconsent.js?1677593322"></script>
<script>
if( navigator.doNotTrack != "yes" && navigator.doNotTrack != "1" && window.doNotTrack != "1" && navigator.msDoNotTrack != "1" ){
	var script = document.createElement('script');
	script.src = '/js/analytics.js'
	document.getElementsByTagName("head")[0].appendChild(script);
}
</script>

</head>

<body>



<div class="donation-container">
  <div class="donation-text">
    <div class="donation-text-container">
      <button onclick="closeDonationBanner()" class="donation-modal-close">
        <img src="/img/icons/ico_close.svg?1677593322" alt="Close">
      </button>
      <p>
        Bitcoin.org is a community funded project, donations are appreciated and used to improve the website.
      </p>
      <button type="button" class="donation-btn" onclick="openDonationModal()">
        Make a donation
      </button>
    </div>
  </div>
  <button type="button" class="donation-visibility-toggle" onclick="toggleDonationBanner()">
    Bitcoin.org needs your support!
  </button>
</div>



<div id="donation-modal" style="display: none" class="donation-modal hidden">
  <div class="modal-dialog">
    <div class="modal-header">
      <div class="modal-close-btn" onclick="closeDonationModal()">×</div>
      <p class="modal-header-text section-title">Donate to Bitcoin.org</p>
    </div>
    <p class="modal-subheader">Use this QR code or address below</p>
    <div style="text-align: center;">
      <div id="donation-qr-code" data-address="3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd"></div>
    </div>
    <div>
      <a
        class="donation-btc-address"
        href="bitcoin:3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd"
        target="_blank">
        3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd
      </a>
    </div>
    <div class="modal-body bg-white" style="overflow-y:hidden;text-align: center;">
      <div>
        
        <button type="button" class="donation-amount-btn" data-amount-usd="5">
          $5.00
          <div class="donation-amount-usd-in-btc">(... BTC)</div>
        </button>
        
        <button type="button" class="donation-amount-btn" data-amount-usd="25">
          $25.00
          <div class="donation-amount-usd-in-btc">(... BTC)</div>
        </button>
        
        <button type="button" class="donation-amount-btn" data-amount-usd="50">
          $50.00
          <div class="donation-amount-usd-in-btc">(... BTC)</div>
        </button>
        
      </div>

      <div>
        <input
          style="margin-right: 15px"
          type="text"
          placeholder="Or custom amount? (BTC)"
          id="donation-input-amount-btc" class="donation-amount-input">
        <input
          type="text"
          placeholder="Or custom amount? (USD)"
          id="donation-input-amount-usd" class="donation-amount-input">
      </div>

      <div>
        <textarea
          class="donation-amount-input"
          id="donation-input-message"
          placeholder="Optional description (for your wallet)"></textarea>
      </div>
    </div>
  </div>
</div>



<div id="detectmobile" class="detectmobile"></div>







<div class="head"><div>
  

<a class="logo" href="/es/"><img src="/img/icons/logotop.svg?1677593322" alt="Bitcoin"></a>

  

<ul id="menusimple" class="menusimple menumain" onclick="mobileMenuHover(event);" ontouchstart="mobileMenuHover(event);">
  <li><a class="is-expand">Introducción</a>
    <ul>
      <li><a href="/es/bitcoin-para-personas">Personas</a></li>
      <li><a href="/es/bitcoin-para-empresas">Empresas</a></li>
      <li><a href="https://developer.bitcoin.org/">Desarrolladores</a></li>
      <li><a href="/es/como-empezar">Cómo empezar</a></li>
      <li><a href="/es/como-funciona">Como funciona</a></li>
      
      <li><a href="/es/bitcoin-documento">White paper</a></li>
      
    </ul>
  </li>
  <li><a class="is-expand">Recursos</a>
    <ul>
      <li><a href="/es/recursos">Recursos</a>
      <li><a href="/es/intercambios">Exchanges</a></li>
      <li><a href="/es/comunidad">Comunidad</a></li>
      
      
      <li><a href="/es/vocabulario">Vocabulario</a></li>
      <li><a href="/es/eventos">Eventos</a></li>
      
        <li><a href="/es/descargar">Bitcoin Core</a></li>
      
    </ul>
  </li>
  <li><a href="/es/innovacion">Innovación</a></li>
  <li><a class="is-expand">Participe</a>
    <ul>
      <li><a href="/es/apoya-bitcoin">Apoya Bitcoin</a>
      <li><a href="/es/comprar">Buy Bitcoin</a></li>
      
      <li><a href="/es/desarrollo">Desarrollo</a></li>
    </ul>
  </li>
  <li><a href="/es/faq">FAQ</a></li>
</ul>

  

<a id="menumobile" class="menumobile" onclick="mobileMenuShow(event);" ontouchstart="mobileMenuShow(event);"></a>

  
<ul class="lang is-expand">
  <li><a>Español</a>
  <ul>
    <li><ul>
      
      
        
          <li><a href="/id/">Bahasa Indonesia</a></li>
        
        
          <li><a href="/ca/">Català</a></li>
        
        
          <li><a href="/da/">Dansk</a></li>
        
        
          <li><a href="/de/">Deutsch</a></li>
        
        
          <li><a href="/en/">English</a></li>
        
        
          <li><a href="/es/" class="active">Español</a></li>
        
        
          <li><a href="/fr/">Français</a></li>
        
        
          <li><a href="/it/">Italiano</a></li>
        
        
          <li><a href="/hu/">Magyar</a></li>
        
        
          <li><a href="/nl/">Nederlands</a></li>
        
        
          <li><a href="/pl/">Polski</a></li>
        
        
          <li><a href="/pt_BR/">Português Brasil</a></li>
        
        
          <li><a href="/ro/">Româna</a></li>
        
        
          <li><a href="/sl/">Slovenšcina</a></li>
        
        
          <li><a href="/sr/">Srpski</a></li>
        
        
          <li><a href="/sv/">Svenska</a></li>
        
        </ul></li><li><ul>
          <li><a href="/tr/">Türkçe</a></li>
        
        
          <li><a href="/el/">????????</a></li>
        
        
          <li><a href="/bg/">?????????</a></li>
        
        
          <li><a href="/ru/">???????</a></li>
        
        
          <li><a href="/uk/">??????????</a></li>
        
        
          <li><a href="/hy/">???????</a></li>
        
        
          <li><a href="/ar/">???????</a></li>
        
        
          <li><a href="/fa/">?????</a></li>
        
        
          <li><a href="/he/">?????</a></li>
        
        
          <li><a href="/hi/">??????</a></li>
        
        
          <li><a href="/ko/">???</a></li>
        
        
          <li><a href="/km/">?????</a></li>
        
        
          <li><a href="/ja/">???</a></li>
        
        
          <li><a href="/zh_CN/">????</a></li>
        
        
          <li><a href="/zh_TW/">????</a></li>
        
      </ul></li>
    </ul>
  </li>
</ul>

  
<div id="langselect" class="langselect">
    <label for="select-input" class="center-select">
        <select id="select-input" class="center-select__input" onchange="window.location=this.value;">
            
            <option value="/id/" >Bahasa Indonesia</option>
            
            <option value="/ca/" >Català</option>
            
            <option value="/da/" >Dansk</option>
            
            <option value="/de/" >Deutsch</option>
            
            <option value="/en/" >English</option>
            
            <option value="/es/"  selected="selected">Español</option>
            
            <option value="/fr/" >Français</option>
            
            <option value="/it/" >Italiano</option>
            
            <option value="/hu/" >Magyar</option>
            
            <option value="/nl/" >Nederlands</option>
            
            <option value="/pl/" >Polski</option>
            
            <option value="/pt_BR/" >Português Brasil</option>
            
            <option value="/ro/" >Româna</option>
            
            <option value="/sl/" >Slovenšcina</option>
            
            <option value="/sr/" >Srpski</option>
            
            <option value="/sv/" >Svenska</option>
            
            <option value="/tr/" >Türkçe</option>
            
            <option value="/el/" >????????</option>
            
            <option value="/bg/" >?????????</option>
            
            <option value="/ru/" >???????</option>
            
            <option value="/uk/" >??????????</option>
            
            <option value="/hy/" >???????</option>
            
            <option value="/ar/" >???????</option>
            
            <option value="/fa/" >?????</option>
            
            <option value="/he/" >?????</option>
            
            <option value="/hi/" >??????</option>
            
            <option value="/ko/" >???</option>
            
            <option value="/km/" >?????</option>
            
            <option value="/ja/" >???</option>
            
            <option value="/zh_CN/" >????</option>
            
            <option value="/zh_TW/" >????</option>
            
        </select>
        <span class="center-select__text">Language: <span class="is-capital">es</span></span>
    </label>
</div>

</div></div>

<div class="body">
  

<div class="breadcrumbs">
  <div class="container">
    
  </div>
</div>

  

<div id="content" class="content">
  


<div class="mainhero">
  <div class="container hero-container">
    <p class="mainsummary">Bitcoin es una  innovadora red de pagos y una nueva clase de dinero.</p>
    <div class="btn-container">
      <a class="btn btn-bright btn-home" href="/es/como-empezar">Cómo comenzar a usar Bitcoin</a>
      <a class="btn btn-light btn-home" href="/es/elige-tu-monedero">Escoja su monedero</a>
      <a class="btn btn-light btn-home" href="/es/comprar">Buy Bitcoin</a>
    </div>

    <div class="mainvideo">
      <button class="mainvideo-btn-open" onclick="loadYoutubeVideo(event);" ontouchstart="loadYoutubeVideo(event);" data-youtubeurl="//www.youtube.com/embed/Gc2en3nHxA4?rel=0&amp;showinfo=0&amp;wmode=opaque&amp;autoplay=1&amp;cc_load_policy=1&amp;hl=es&amp;cc_lang_pref=es">¿Qué es Bitcoin?</button>
    </div>

  </div>
</div>
<div class="mainoverview">
  <div class="container">
    <div class="mainoverview-title">O vea una guía rápida para</div>
    <a href="/es/bitcoin-para-personas" class="maincard">
      <img class="maincard-img" src="/img/icons/ico_individuals.svg?1677593322" alt="Icon">
      <div>
        <p class="maincard-title">Personas</p>
        <p class="maincard-link">Learn more</p>
      </div>
    </a>
    <a href="/es/bitcoin-para-empresas" class="maincard">
      <img class="maincard-img" src="/img/icons/ico_business.svg?1677593322" alt="Icon">
      <div>
        <p class="maincard-title">Empresas</p>
        <p class="maincard-link">Learn more</p>
      </div>
    </a>
    <a href="https://developer.bitcoin.org/" class="maincard">
      <img class="maincard-img" src="/img/icons/ico_developers.svg?1677593322" alt="Icon">
      <div>
        <p class="maincard-title">Desarrolladores</p>
        <p class="maincard-link">Learn more</p>
      </div>
    </a>
  </div>
  <a class="btn-down" href="#maindesc-title">
    <img src="/img/icons/ico_arrow_down.svg?1677593322" alt="Link">
  </a>
</div>
<div class="maindesc">
  <div class="container">
    <p class="section-title center home-title" id="maindesc-title">Cómo comenzar a usar Bitcoin</p>
    <div class="row maindesc-row">
      <div>
        <p class="maindesc-text">Bitcoin usa tecnología peer-to-peer o entre pares para operar sin una autoridad central o bancos; la gestión de las transacciones y la emisión de bitcoins es llevada a cabo de forma colectiva por la red. <b>Bitcoin es de código abierto; su diseño es público, nadie es dueño o controla Bitcoin y <a href="/es/apoya-bitcoin">todo el mundo puede participar</a></b>. Por medio de sus muchas propiedades únicas, Bitcoin permite usos interesantes no contemplados por ningún sistema de pagos anterior.</p>
        <ul class="mainlist">
          
            <li class="mainlist-item">
              <img src="/img/icons/main_ico_instant.svg?1677593322" alt="Icon">
              <p>Rápidas operaciones<br>entre pares</p>
            </li>
          
          
            <li class="mainlist-item">
              <img src="/img/icons/main_ico_worldwide.svg?1677593322" alt="Icon">
              <p>Pagos en<br>todo el mundo</p>
            </li>
          
          
            <li class="mainlist-item">
              <img src="/img/icons/main_ico_lowfee.svg?1677593322" alt="Icon">
              <p>Comisiones muy<br>bajas o inexistentes</p>
            </li>
          
        </ul>
      </div>
      <img class="maindesc-img" src="/img/home/bitcoin-img.svg?1677593322" alt="Bitcoin image">
    </div>
    <div class="btn-container">
      <a class="btn btn-dark btn-home center" href="/es/como-empezar">Cómo comenzar a usar Bitcoin</a>
    </div>
  </div>
</div>

<!-- Youtube popup video -->
<div class="modal closed">
  <iframe class="modal-video" allowfullscreen="" frameborder="0">
  </iframe>
  <button class="mainvideo-btn-close" onclick="loadYoutubeVideo(event);" ontouchstart="loadYoutubeVideo(event);"></button>
</div>
<div class="modal-overlay closed">
</div>


</div>

  <div class="footer">
    <div class="container">
       

<a class="logo-footer" href="/es/">
  <img src="/img/icons/logo-footer.svg?1677593322" alt="Bitcoin">
</a> 
       

<div class="row footer-row">
  <div class="donate">
    <div class="row donate-row">
      <div>
        <span class="footer-title">Support Bitcoin.org:</span>
        <a onclick="openDonationModal()" class="donate-btn btn-bright">Donate</a>
        <p class="donate-text">
          <a class="donate-link" href="bitcoin:3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd" target="_blank">3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd</a>
        </p>
      </div>
    </div>
  </div>

  <div class="row footermenu">
    <div class="footermenu-item footermenu-introduction">
      <p class="footer-title">Introducción:</p>
      <ul class="footermenu-list">
        <li>
          <a href="/es/bitcoin-para-personas">Personas</a>
        </li>
        <li>
          <a href="/es/bitcoin-para-empresas">Empresas</a>
        </li>
        <li>
          <a href="https://developer.bitcoin.org/">Desarrolladores</a>
        </li>
        <li>
          <a href="/es/como-empezar">Cómo empezar</a>
        </li>
        <li>
          <a href="/es/como-funciona">Como funciona</a>
        </li>
        <li>
          <a href="/es/debes-saber">Cosas que necesita saber</a>
        </li>
        
        <li>
          <a href="/es/bitcoin-documento">White paper</a>
        </li>
        
      </ul>
    </div>
    
    <div class="footermenu-item footermenu-resources">
      <p class="footer-title">Recursos:</p>
      <ul class="footermenu-list">
        <li>
          <a href="/es/recursos">Recursos</a>
        <li>
          <a href="/es/intercambios">Exchanges</a>
        </li>
        <li>
          <a href="/es/comunidad">Comunidad</a>
        </li>
        <li>
          <a href="/es/vocabulario">Vocabulario
          </a>
        </li>
        <li>
          <a href="/es/eventos">Eventos</a>
        </li>
        
          <li>
            <a href="/es/descargar">Bitcoin Core</a>
        </li>
        
      </ul>
    </div>
    
    <div class="footermenu-item footermenu-participate">
      <p class="footer-title">Participe:</p>
      <ul class="footermenu-list">
        <li>
          <a href="/es/apoya-bitcoin">Apoya Bitcoin</a>
        
        
        <li>
          <a href="/es/desarrollo">Desarrollo</a>
        </li>
      </ul>
    </div>
    <div class="footermenu-item footermenu-other">
      <p class="footer-title">Other:</p>
      
      <a href="/es/legal">Legal</a>
      
      <a href="/en/privacy">Privacy Policy</a>
      
      <a href="/es/prensa">Prensa</a>
      <a href="/es/sobre-nosotros">Acerca de bitcoin.org</a>
      <a href="/en/blog">Blog</a>
    </div>
  </div>
</div>
 
       

<div class="footersponsor">
  <!--<div><span>Una comunidad web patrocinada por</span> <a href="https://bitcoinfoundation.org/"><img src="/img/brand/bitcoinfoundation.png?1677593322" alt="Bitcoin Foundation"></a></div>-->
</div>

    </div>
    

<div class="footer-bottom">
  <div class="container">
    <div class="row footer-bottom-row">
      <div class="footerlicense">© Bitcoin Project 2009-2023 Publicado bajo la <a href="http://opensource.org/licenses/mit-license.php" target="_blank">licencia MIT</a></div>
      <div class="row footer-status-block">
        <a href="/en/alerts" class="statusmenu">Network Status</a>
        
<ul class="lang is-expand">
  <li><a>Español</a>
  <ul>
    <li><ul>
      
      
        
          <li><a href="/id/">Bahasa Indonesia</a></li>
        
        
          <li><a href="/ca/">Català</a></li>
        
        
          <li><a href="/da/">Dansk</a></li>
        
        
          <li><a href="/de/">Deutsch</a></li>
        
        
          <li><a href="/en/">English</a></li>
        
        
          <li><a href="/es/" class="active">Español</a></li>
        
        
          <li><a href="/fr/">Français</a></li>
        
        
          <li><a href="/it/">Italiano</a></li>
        
        
          <li><a href="/hu/">Magyar</a></li>
        
        
          <li><a href="/nl/">Nederlands</a></li>
        
        
          <li><a href="/pl/">Polski</a></li>
        
        
          <li><a href="/pt_BR/">Português Brasil</a></li>
        
        
          <li><a href="/ro/">Româna</a></li>
        
        
          <li><a href="/sl/">Slovenšcina</a></li>
        
        
          <li><a href="/sr/">Srpski</a></li>
        
        
          <li><a href="/sv/">Svenska</a></li>
        
        </ul></li><li><ul>
          <li><a href="/tr/">Türkçe</a></li>
        
        
          <li><a href="/el/">????????</a></li>
        
        
          <li><a href="/bg/">?????????</a></li>
        
        
          <li><a href="/ru/">???????</a></li>
        
        
          <li><a href="/uk/">??????????</a></li>
        
        
          <li><a href="/hy/">???????</a></li>
        
        
          <li><a href="/ar/">???????</a></li>
        
        
          <li><a href="/fa/">?????</a></li>
        
        
          <li><a href="/he/">?????</a></li>
        
        
          <li><a href="/hi/">??????</a></li>
        
        
          <li><a href="/ko/">???</a></li>
        
        
          <li><a href="/km/">?????</a></li>
        
        
          <li><a href="/ja/">???</a></li>
        
        
          <li><a href="/zh_CN/">????</a></li>
        
        
          <li><a href="/zh_TW/">????</a></li>
        
      </ul></li>
    </ul>
  </li>
</ul>
 
        <div id="footer-langselect" class="footer-langselect langselect">
          <label for="select-input-footer" class="center-select">
            <select class="center-select__input" onchange="window.location=this.value; ">
              
              <option value="/id/" >Bahasa Indonesia</option>
              
              <option value="/ca/" >Català</option>
              
              <option value="/da/" >Dansk</option>
              
              <option value="/de/" >Deutsch</option>
              
              <option value="/en/" >English</option>
              
              <option value="/es/"  selected="selected">Español</option>
              
              <option value="/fr/" >Français</option>
              
              <option value="/it/" >Italiano</option>
              
              <option value="/hu/" >Magyar</option>
              
              <option value="/nl/" >Nederlands</option>
              
              <option value="/pl/" >Polski</option>
              
              <option value="/pt_BR/" >Português Brasil</option>
              
              <option value="/ro/" >Româna</option>
              
              <option value="/sl/" >Slovenšcina</option>
              
              <option value="/sr/" >Srpski</option>
              
              <option value="/sv/" >Svenska</option>
              
              <option value="/tr/" >Türkçe</option>
              
              <option value="/el/" >????????</option>
              
              <option value="/bg/" >?????????</option>
              
              <option value="/ru/" >???????</option>
              
              <option value="/uk/" >??????????</option>
              
              <option value="/hy/" >???????</option>
              
              <option value="/ar/" >???????</option>
              
              <option value="/fa/" >?????</option>
              
              <option value="/he/" >?????</option>
              
              <option value="/hi/" >??????</option>
              
              <option value="/ko/" >???</option>
              
              <option value="/km/" >?????</option>
              
              <option value="/ja/" >???</option>
              
              <option value="/zh_CN/" >????</option>
              
              <option value="/zh_TW/" >????</option>
              
            </select>
            <span class="center-select__text">es</span>
          </label>
        </div>
      </div>
<!--      <div class="row">  -->
        
<!--    </div> -->
    </div>
  </div>
</div>

  </div>
</div>



<script type="text/javascript">
  fallbackSVG();
  addAnchorLinks();
  trackOutgoingLinks();
  toggleDarkMode();
</script>






</body>

</html>
