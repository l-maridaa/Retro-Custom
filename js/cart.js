

if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}
else {
    ready();
}

function ready(){

    let products = [
        {"product_id":1,"category":"Laptop","brand":"ASUS","name":"ProArt Studiobook 16","imgSrc":"./images/Artboard 1.png","price":3299,"desc":"MODEL CODE : H7600HM-L2057R 2B-STAR BLACK <br/>CPU : Intel® Core  i9-11900H ( 8C/16Th  4.9 GHz) <br/>RAM : 64GB DualChannel DDR4 <br/>Storage : 2TB M.2 NVMe  PCIe <br/>Graphic : NVIDIA® GeForce® RTX  3060  105W with Dynamic Boost  6GB GDDR6 <br/>Display :  OLED 16:10 4K <br/>Camera : HD camera with IR function <br/>OS : Windows 10 Pro <br/>Keyboard : Backlit Chiclet Keyboard <br/>Battery :  90WHrs  4S1P  4-cell Li-ion <br/>Weight :  2.40 kg (5.29 lbs) <br/>Official Warranty : 2 YEARS          "},
        {"product_id":2,"category":"Laptop","brand":"ASUS","name":"Asus Vivobook Pro 16X OLED ","imgSrc":"./images/Artboard 2.png","price":1399,"desc":"MODEL CODE : N7600PC-0002 9G-COMET GREY <br/>RAM : 16GB LPDDR4X on board<br/>Storage :  512GB M.2 NVMe PCIe SSD<br/>Graphic :  Intel® Iris Xe Graphics  NVIDIA GeForce RTX  3050<br/>Camera : 720p HD With privacy shutter<br/>OS : Windows 10 License<br/>Keyboard : Backlit Chiclet Keyboard<br/>Weight : 1.95 kg | Color : Comet Grey<br/>Official Warranty : 2 YEARS          "},
        {"product_id":3,"category":"Laptop","brand":"ASUS","name":"Asus Vivobook Pro 16X OLED","imgSrc":"./images/Artboard 3.png","price":1299,"desc":"MODEL CODE : M7600QC-L2061W 8K-BLACK <br/>RAM : 8GB DDR4 on board<br/>Storage : 512GB M.2 NVMe PCIe SSD<br/>Camera : 5.0M camera<br/>OS : Windows 11 Home<br/>Camera : 720p HD With privacy shutter<br/>OS : Windows 10 License<br/>Keyboard : Backlit Chiclet Keyboard<br/>Weight : 1.95 kg | Color : Comet Grey<br/>Official Warranty : 2 YEARS           "},
        {"product_id":4,"category":"Laptop","brand":"MSI","name":"MSI GF63 THIN 11UD ( 11th Gen Intel )","imgSrc":"./images/Artboard 4.png","price":1099,"desc":"MSI : GF63 Thin 11UD-401KH Black <br/>RAM : 8GB DDR4-3200MHz ( Free One Slot  )  <br/>VGA : NVIDIA GTX 3050Ti with 4GB GDDR6 <br/>OS : Window 11 Home License 64Bit <br/>Battery : 3-Cells 51whr Li-Polymer <br/>Weight : 1.86 kg with battery | Color : Black <br/>Official Warranty : 1 YEAR"},
        {"product_id":5,"category":"Laptop","brand":"MSI","name":"MSI GF76 KATANA 11UDK","imgSrc":"./images/Artboard 5.png","price":1099,"desc":"MSI GF76 KATANA 11UDK-046KH <br/>CPU : Intel® Core  i7-11800H (8C 16TH 4.6 GHz)<br/>RAM : 8GB DDR4-3200MHz <br/>Storage : 512GB NVMe PCIe Gen3 <br/>Screen : 17.3  FHD (1920x1080)  144Hz  IPS-Level<br/>VGA : NVIDIA ® RTX  3050Ti Laptop GPU  4GB GDDR6<br/>Keyboard : Backlight Keyboard (Single-Color  Red)<br/>OS : Window 10 Home License 64Bit<br/>Battery : 53.5 Battery (Whr)<br/>Weight : 2.6 kg with battery | Color : Black<br/>Official Warranty : 1 YEAR"},
        {"product_id":6,"category":"Laptop","brand":"MSI","name":"MSI GF63 THIN 11UC ( 11th Gen Intel )","imgSrc":"./images/Artboard 6.png","price":1049,"desc":"MSI : GF63 Thin 11UC-402KH Black <br/>CPU : Intel® Core  i7-11800H (8C 16Th 4.60 GHz) <br/>RAM : 8GB DDR4-3200MHz ( Free One Slot  )  <br/>Storage : 512GB NVMe  ( 1x HDD Slot ) <br/>Screen : 15.6  FHD (1920x1080) IPS-level 144Hz <br/>VGA : NVIDIA GTX 3050 with 4GB GDDR6 <br/>Keyboard : Backlight Keyboard (Single-Color  Red) <br/>OS : Window 11 Home License 64Bit <br/>Battery : 3-Cells 51whr Li-Polymer <br/>Weight : 1.86 kg with battery | Color : Black <br/>Official Warranty : 1 YEAR"},
        {"product_id":7,"category":"Hardware","brand":"INTEL","name":"Intel® Core  i5-12600KF Box (10Cores 16Threads)","imgSrc":"./images/Artboard 7.png","price":289,"desc":"Intel® Core  i5-12600KF Box (10Cores 16Threads)"},
        {"product_id":8,"category":"Hardware","brand":"INTEL","name":"Intel® Core  i7-12700KF Box (12Cores 20Threads)","imgSrc":"./images/Artboard 8.png","price":439,"desc":"Intel® Core  i7-12700KF Box (12Cores 20Threads)"},
        {"product_id":9,"category":"Hardware","brand":"INTEL","name":"Intel® Core  i7-12700K Box (12Cores 20Threads)","imgSrc":"./images/Artboard 9.png","price":449,"desc":"Intel® Core  i7-12700K Box (12Cores 20Threads)"},
        {"product_id":10,"category":"Hardware","brand":"XPG","name":"XPG D50 RGB 16GB","imgSrc":"./images/Artboard 10.png","price":89,"desc":"XPG D50 RGB 16GB (2x8GB) 3200MHz"},
        {"product_id":11,"category":"Hardware","brand":"XPG","name":"XPG D50  RGB 16GB","imgSrc":"./images/Artboard 11.png","price":139,"desc":"XPG D50 RGB 16GB (2x8GB) 4133MHz"},
        {"product_id":12,"category":"Hardware","brand":"XPG","name":"XPG D50G RGB 16GB","imgSrc":"./images/Artboard 12.png","price":89,"desc":"XPG D50G RGB 16GB - Single (3200MHz)"},
        {"product_id":13,"category":"Hardware","brand":"Gigabyte","name":"Gigabyte Z690 AORUS ULTRA LGA1700 ( 12th Gen )","imgSrc":"./images/Artboard 13.png","price":410,"desc":"Supports 12th Gen Intel®  Core  Series Processors<br/>Dual Channel Non-ECC Unbuffered DDR5  4 DIMMs<br/>16+1+2 Phases Direct VRM Design with 105A Power Stage* and Tantalum Polymer Capacitor<br/>DDR5 XTREME MEMORY Design with SMD DIMM and Shielded Memory Routing<br/>Advanced Thermal Solution with Fully Covered Thermal Designand Fins-Array II<br/>WIFI6 802.11ax 2T2R & BT5 with AORUS Antenna<br/>Hi-Fi Audio with ALC4080 and WIMA Audio Capacitors<br/>Fast 2.5GbE LAN with Bandwidth Management<br/>Four Ultra-Fast NVMe PCIe 4.0/3.0 x4 M.2 with Enlarged Thermal Guards<br/>SuperSpeed USB 3.2 Gen2x2 TYPE-C® delivers up to 20Gb/s transfer speeds<br/>FUSION 2.0 with Multi-Zone Addressable LED Light Show Design  Support Addressable LED & RGB LED Strips<br/>Smart Fan 6 Features Multiple Temperature Sensors   Hybrid Fan Headers with FAN STOP<br/>Q-Flash Plus Update BIOS without Installing the CPU  Memory and Graphics Card"},
        {"product_id":14,"category":"Hardware","brand":"Gigabyte","name":"Gigabyte Z690 AERO G DDR4 LGA1700 ( 12th Gen )","imgSrc":"./images/Artboard 14.png","price":335,"desc":"Supports 12th Gen Intel® Core  Series Processors​ <br/>Dual Channel Non-ECC Unbuffered DDR4  4 DIMMs<br/>PCle 5.0 x16 slot design can be ready for PCle 5.0 GPU or NVMe storage<br/>Go further without more cables by VisionLINK I/O design<br/> Brings a speed network experience with Intel® 2.5GbE LAN<br/>WIFI6 2x2 802.11ax 2T2R & BT5 with new antenna for better signal<br/>No Hassle Connection with front USB 3.2 Gen 2x2 Type-C®<br/>4 x Ultra-Fast NVMe PCIe 4.0 x4 M.2 connectors with enlarged thermal guards<br/>Advanced thermal architecture design for the better thermal dissipation<br/>Smart Fan 6 features hybrid fan headers and numerous temperature sensors for fan mode configuration<br/>Q-Flash Plus Updates BIOS without Installing the CPU  Memory and Graphics Card"},
        {"product_id":15,"category":"Hardware","brand":"Gigabyte","name":"Gigabyte Z590 VISION G ( 11th Gen   10th Gen )","imgSrc":"./images/Artboard 15.png","price":259,"desc":"Powerful performance support 11th and 10th Gen Intel® Core  series processors <br/>Dual Channel Non-ECC Unbuffered DDR4 memory  4 DIMMs<br/>Go further without more cables by VisionLINK I/O design<br/>High-bandwidth and low-latency network support by Intel® 2.5GbE LAN<br/>Comprehensive connectivity by front and rear USB3.2 Gen 2x2 Type-C® connectors<br/>PCIe 4.0 hardware design and maximum memory capacity up to 128GB for empowering real-time workload<br/>4 Ultra-Fast NVMe PCIe x4 M.2 connectors with unique thermal guards<br/>Effective cooling solution design for the better thermal dissipation<br/>Smart Fan 6 features hybrid fan headers and numerous temperature sensors for fan mode configuration<br/>Q-Flash Plus Updates BIOS without Installing the CPU  Memory and Graphics Card<br/>"},
        {"product_id":16,"category":"Hardware","brand":"AORUS","name":"AORUS X570 MASTER","imgSrc":"./images/Artboard 16.png","price":415,"desc":"Supports AMD 3rd Gen Ryzen / 2nd Gen Ryzen / 2nd Gen Ryzen  with Radeon  Vega Graphics/ Ryzen  with Radeon  Vega Graphics Processors<br/>Dual Channel ECC/ Non-ECC Unbuffered DDR4  4 DIMMs<br/>Direct 14 Phases Infineon Digital VRM Solution with PowIRstage<br/>Advanced Thermal Design with Fins-Array Heatsink and Direct Touch Heatpipe<br/>Triple Ultra-Fast NVMe PCIe 4.0/3.0 x4 M.2 with Triple Thermal Guards<br/>Intel® WiFi 6 802.11ax 2T2R & BT 5<br/>Rear 125dB SNR AMP-UP Audio with ALC1220-VB & ESS SABRE 9118 DAC with WIMA Audio Capacitors<br/>Realtek® 2.5GbE + Intel® Gigabit LAN with cFosSpeed<br/>USB TurboCharger for Mobile Device Fast Charge Support<br/>RGB FUSION 2.0 with Multi-Zone Addressable LED Light Show Design  Supports Addressable LED & RGB LED Strips<br/>Smart Fan 5 Features Multiple Temperature Sensors  Hybrid Fan Headers with FAN STOP and Noise Detection<br/>Front & Rear USB 3.2 Gen2 Type-C  Headers<br/>Adopts a high quality ball bearing fan which guarantees 60 000 working hours.<br/>Integrated Base Plate & I/O Shield Armor<br/>Q-Flash Plus Update BIOS Without Installing CPU  Memory and Graphics Card"},
        {"product_id":17,"category":"Hardware","brand":"AORUS","name":"AORUS X570 ELITE WIFI","imgSrc":"./images/Artboard 17.png","price":275,"desc":"Supports AMD 3rd Gen Ryzen / 2nd Gen Ryzen / 2nd Gen Ryzen  with Radeon  Vega Graphics/ Ryzen  with Radeon  Vega Graphics Processors<br/>Dual Channel Non-ECC Unbuffered DDR4  4 DIMMs<br/>12+2 Phases Digital VRM Solution with DrMOS<br/>Advanced Heatsink Design with Enlarge Heatsink<br/>Dual Ultra-Fast NVMe PCIe 4.0/3.0 x4 M.2 with Single Thermal Guard<br/>High Quality Audio Capacitors and Audio Noise Guard with LED Trace Path Lighting<br/>Intel® Gigabit LAN with cFosSpeed Internet Accelerator<br/>RGB FUSION 2.0 with Multi-Zone Addressable LED Light Show Design  Supports Addressable LED & RGB LED Strips<br/>Smart Fan 5 features Multiple Temperature Sensors  Hybrid Fan Headers with FAN STOP<br/>-Front USB 3.1 Gen2 Type-C  Header & HDMI 2.0 support<br/>Integrated I/O Shield Armor<br/>Q-Flash Plus update BIOS Without Installing CPU  Memory and Graphics card"},
        {"product_id":18,"category":"Hardware","brand":"AORUS","name":"AORUS B550 PRO AC","imgSrc":"./images/Artboard 18.png","price":219,"desc":"Supports 3rd Gen AMD Ryzen Processors<br/>Dual Channel Non-ECC Unbuffered DDR4  4 DIMMs<br/>True 12+2 Phases Digital VRM Solution with 50A DrMOS<br/>Advanced Thermal Design with Fins-Array Heatsink and Direct Touch Heatpipe<br/>Ultra Durable PCIe 4. 0 Ready x16 Slot<br/>Dual Ultra-Fast NVMe PCIe 4. 0/3. 0 x4 M. 2 with Thermal Guards<br/>Onboard Intel Dual Band 802. 11ac & BT 4. 2 Wireless with AORUS Antenna<br/>AMP-UP Audio with ALC1220-VB and WIMA Capacitors for Rear 120dB SNR<br/>Blazing Fast 2. 5GbE LAN with Bandwidth Management<br/>USB 3. 2 Gen2 Type-C & HDMI Support"},
        {"product_id":19,"category":"Hardware","brand":"Gigabyte","name":"Gigabyte RTX  3080 GAMING OC 10G (rev. 1.0)","imgSrc":"./images/Artboard 19.png","price":1419,"desc":"FEATURES <br/>NVIDIA Ampere Streaming Multiprocessors<br/>2nd Generation RT Cores<br/>3rd Generation Tensor Cores<br/>Powered by GeForce RTX  3080<br/>Integrated with 10GB GDDR6X 320-bit memory interface<br/>WINDFORCE 3X Cooling System with alternate spinning fans<br/>RGB Fusion 2.0<br/>Protection metal back plate<br/>4 Years Warranty (Online registration required)<br/>Core Clock<br/>1800 MHz (Reference Card: 1710 MHz)"},
        {"product_id":20,"category":"Hardware","brand":"Gigabyte","name":"Gigabyte GeForce RTX  3070 Ti VISION OC 8G","imgSrc":"./images/Artboard 20.png","price":1299,"desc":"FEATURES <br/>NVIDIA Ampere Streaming Multiprocessors <br/>2nd Generation RT Cores <br/>3rd Generation Tensor Cores <br/>Powered by GeForce RTX  3070 Ti <br/>Integrated with 8GB GDDR6X 256-bit memory interface <br/>WINDFORCE 3X Cooling System with alternate spinning fans <br/>RGB Fusion 2.0 <br/>Protection metal back plate <br/>CORE CLOCK <br/>1830 MHz (Reference Card: 1770 MHz)"},
        {"product_id":21,"category":"Hardware","brand":"Gigabyte","name":"Gigbayte GeForce RTX  3070 Ti GAMING OC 8G","imgSrc":"./images/Artboard 21.png","price":1249,"desc":"FEATURES<br/>NVIDIA Ampere Streaming Multiprocessors<br/>2nd Generation RT Cores<br/>3rd Generation Tensor Cores<br/>Powered by GeForce RTX  3070 Ti<br/>Integrated with 8GB GDDR6X 256-bit memory interface<br/>WINDFORCE 3X Cooling System with alternate spinning fans<br/>RGB Fusion 2.0<br/>Protection metal back plate<br/>4 Years Warranty (Online registration required)<br/>Core Clock<br/>1830 MHz (Reference Card: 1770 MHz)<br/>"},
        {"product_id":22,"category":"Hardware","brand":"Kingston","name":"A2000 NVME PCIE SSD","imgSrc":"./images/Artboard 22.png","price":129,"desc":"A2000 NVME PCIE SSD 1TB (PCIE M.2 1TB / READ SPEED UP TO 2500MB/S )"},
        {"product_id":23,"category":"Hardware","brand":"Kingston","name":"A2000 NVME PCIE SSD","imgSrc":"./images/Artboard 23.png","price":45,"desc":"A2000 NVME PCIE SSD 256GB (PCIE M.2 256GB / READ SPEED UP TO 2000MB/S )"},
        {"product_id":24,"category":"Hardware","brand":"Adata","name":"ADATA SU800","imgSrc":"./images/Artboard 24.png","price":125,"desc":"ADATA SU800 1TB (SATA III 6GB/S 1TB)"},
        {"product_id":25,"category":"Hardware","brand":"Aigo","name":"AIGO AZ300 BLACK","imgSrc":"./images/Artboard 25.png","price":69,"desc":"AIGO AZ300 BLACK ( SUPPORT ATX MB / USB 3.0 / TEMPERED GLASS )"},
        {"product_id":26,"category":"Hardware","brand":"Aigo","name":"AIGO SHADOW 2","imgSrc":"./images/Artboard 26.png","price":39,"desc":"AIGO SHADOW 2 ( SUPPORT ATX MB / USB 3.0 / TEMPERED GLASS )"},
        {"product_id":27,"category":"Hardware","brand":"Aigo","name":"Aigo P120","imgSrc":"./images/Artboard 27.png","price":119,"desc":"AIGO P120 CRYSTAL BLACK ( SUPPORT ATX MB / USB 3.0 / TEMPERED GLASS )"},
        {"product_id":28,"category":"Peripherals","brand":"Razer","name":"Razer DeathAdder Essential Gaming Mouse","imgSrc":"./images/Artboard 28.png","price":29,"desc":"Razer DeathAdder Essential Gaming Mouse: 6400 DPI Optical Sensor - 5 Programmable Buttons - Mechanical Switches - Rubber Side Grips - Classic Black <br/>The #1 Best-Selling Gaming Peripherals Manufacturer in the US: Source - The NPD Group  Inc.  U.S. Retail Tracking Service  Keyboards  Mice  PC Headset  PC Microphone  Gaming Designed  Based on dollar sales  Jan. 2017- Mar. 2020 combined.<br/>Precision 6 400 DPI optical sensor: Offers on-the-fly sensitivity adjustment through dedicated DPI buttons (reprogrammable) for gaming and creative work<br/>Durable mechanical switches: Supports up to 10 million clicks  backed by a 2 year warranty<br/>Ridged  Rubberized scroll wheel for maximum accuracy: Small  tactile bumps increases grip and allows for more controlled scrolling in high-stakes gaming situations<br/>5 Programmable Buttons: Allows for button remapping and assignment of complex macro functions through Razer Synapse<br/>"},
        {"product_id":29,"category":"Peripherals","brand":"Razer","name":"Razer Level Up Bundle","imgSrc":"./images/Artboard 29.png","price":79,"desc":"Cynosa Lite gaming keyboard features customisable single-zone Chroma RGB lighting  programmable macro functionality  and a quiet  cushioned  spill-resistant design <br/>Viper Mini ultralight wired gaming mouse boasts fast gaming switches  an 8500 DPI optical sensor  Chroma RGB underglow lighting  6 programmable buttons  and a drag-free cord <br/>Gigantus v2 cloth gaming mouse pad features thick  high-density foam and a non-slip base "},
        {"product_id":30,"category":"Peripherals","brand":"MSI","name":"MSI Clutch GM11","imgSrc":"./images/Artboard 30.png","price":25,"desc":"Stunning RGB lighting with over 7 lighting effects <br/>5-Level DPI sensor matches with 5 different colors<br/>Symmetrical mouse design<br/>Pmw-3325 Optical sensor<br/>Fine-tune detail settings with Dragon center"},
        {"product_id":31,"category":"Peripherals","brand":"MSI","name":"MSI Headset Immerse GH30 Gaming","imgSrc":"./images/Artboard 31.png","price":59,"desc":"Large 40mm drivers <br/>Extra 3.5mm splitter cable to use microphone and speaker on PC <br/>Lightweight and foldable headband design <br/>Detachable microphone <br/>Easy volume and microphone control  <br/>Carry pouch included in retail box"},
        {"product_id":32,"category":"Peripherals","brand":"ASUS","name":"ASUS Optical RGB Gaming Mouse - P304 TUF M5","imgSrc":"./images/Artboard 32.png","price":29,"desc":"DESIGNED FOR COMMITTED GAMERS - ASUS M5 Wired Gaming Mouse is fitted with 6200 DPI Gaming Grade Optical Sensor with a tracking speed of 220 inches per second (IPS) delivering accuracy and speed for a lag-free and smooth gaming experience <br/>AMBIDEXTROUS TUF M5 OPTICAL GAMING MOUSE - Lightweight & ergonomically designed for a perfect claw or fingertip grip. Features 50-million click Omron switch that delivers swift gameplay for both left- & right-handed gamers <br/>BUILT TO LAST - TUF M5 computer gaming mouse comes with a specialized coating for exceptional durability. This compact yet rough & tough mouse can withstand abrasion  friction & perspiration tests and provides precision movements for countless hours <br/>PERSONALIZED PLAY SETTINGS   Includes 6 tactile programmable buttons  a USB Passthrough for easy connectivity & on-board memory. The M5 gaming mouse delivers comfort  superior performance and reliability that pro gamers need during intense gaming sessions <br/>UNIQUELY YOURS - ASUS Aura Sync & ROG Armoury II software allow easy customization of audio profiles  colors  lighting effects  and more  across all Aura Synced devices  including keyboard  mouse pad  and other gaming accessories"},
        {"product_id":33,"category":"Peripherals","brand":"ASUS","name":"ASUS TUF K3 Mechanical PC Gaming Keyboard","imgSrc":"./images/Artboard 33.png","price":70,"desc":"MECHANICAL GAMING KEYBOARD - ASUS TUF K3 features heavy-duty & highly-durable mechanical switches (customizable Blue  Brown or Red switches) with a lifespan of 50-million keystrokes for responsive & reliable performance during intense gaming sessions<br/>ANTI-GHOSTING - With N-Key rollover response  onboard memory  8 fully-programmable keys with on-the fly macro keyboard recordings for uninterrupted video games   it s got it all!<br/>DETACHABLE WRIST-REST - TUF K3 Wired Gaming Keyboard comes with a detachable magnetic wrist rest provides optimal comfort and sturdy aerospace-grade aluminum alloy frame keeps the keyboard in place during intense battles and gaming marathons<br/>DEDICATED KEYBOARD MEDIA CONTROLS - Control your audio with intuitive media keys on this PC gaming keyboard. Includes USB Passthrough for easy connectivity with various devices such as mouse  flash drive  or for charging smartphones or tablets<br/>DESIGNED FOR COMMITTED GAMERS - TUF K3 Computer gaming Keyboard supports ASUS Aura Sync & the latest Armoury Crate software for centralized controls & customization of audio profiles  colors  lighting effects  recording macros and more<br/>"},
        {"product_id":34,"category":"Peripherals","brand":"Logitech","name":"Logitech G402 Hyperion Fury FPS Gaming Mouse","imgSrc":"./images/Artboard 34.png","price":49,"desc":"Responsiveness:USB data format: 16 bits/axis USB report rate: 1000 Hz (1ms) Microprocessor: 32-bit <br/>Fusion Engine hybrid sensor 8 programmable buttons On-the-fly DPI Switching 32-bit ARM processor 1 millisecond report High-speed clicking Full-speed USB <br/>4 on-the-fly DPI settings Tracking Resolution: 240-4000 dpi Max. acceleration: >16G* Max. speed: >500 ips* <br/>Glide:Dynamic coefficient of friction -: .09   (k)* Static coefficient of friction -: .14   (s)* <br/>Dimension and Weight: Height: 5.4 in (136 mm) Width: 2.8 in (72 mm) Depth: 1.6 in (41 mm) Weight: 5.1 oz (144 grams mouse plus cable)  3.8 oz (108 grams mouse without cable) Length Cable: 7 ft. ( 2.1 m) <br/>World's fastest gaming mouse: Fusion Engine technology and 1MS report rate enables tracking speeds of up to 10 meters/second (420 ips) <br/>8 programmable buttons: Customize your gaming experience and save button settings to the onboard memory"},
        {"product_id":35,"category":"Peripherals","brand":"Logitech","name":"Logitech G213 Gaming Keyboard","imgSrc":"./images/Artboard 35.png","price":60,"desc":"Prodigy Series Logitech G keyboard for advanced gaming-grade performance up to 4x faster than standard keyboards so every keypress is near instantaneous from fingers to screen <br/>Brilliant Color Spectrum Illumination lets you easily personalize up to 5 lighting zones from over 16.8 million colors to match your style and gaming gear <br/>Tactile performance keys tuned for gaming with responsive and more. LCD Display: No <br/>Dedicated media control let you quickly play  pause  skip and adjust the volume of music right from the keyboard <br/>Easily customize key lighting  12 Function keys with custom commands  and more with free Logitech Gaming Software"},
        {"product_id":36,"category":"Accessories","brand":"TP-Link","name":"TP-Link 450Mbps Wireless N Router TL-WR940N","imgSrc":"./images/Artboard 36.png","price":25,"desc":"450Mbps wireless speed ideal for interruption sensitive applications like HD video streaming<br/>Three antennas increase the wireless robustness and stability* <br/>Easy wireless security encryption at a push of WPS button <br/>IP based bandwidth control allows administrators to determine how much bandwidth is allotted to each PC <br/>450Mbps wireless speed is only for TL-WR940N V3 while the earlier version is 300Mbps."},
        {"product_id":37,"category":"Accessories","brand":"ADATA","name":"DATA HD770G 1TB RGB USB 3.2 IP68","imgSrc":"./images/Artboard 37.png","price":69,"desc":"World's First Durable External hard disk drive with RGB lighting <br/>Military-Grade IP68 Complete Protection  Waterproof  Shockproof  Dustproof <br/>AES 256-bit encryption for data security <br/>USB3.2 Gen1 Backward compatible with USB 2.0 connection <br/>"},
        {"product_id":38,"category":"Accessories","brand":"Targus","name":"Targus/ECI 15.6  Sport Backpack (Black)","imgSrc":"./images/Artboard 38.png","price":20,"desc":"Sporty on the outside  all business on the inside  the 15.6  Sport Backpack is made for the professional on the go. The water bottle pockets put hydration at arm s length whether you're on the train or the airport  while a pocket on the front puts your essentials within easy reach. The pack is functional  too  with reflective accents that help to increase visibility. Its lightweight design is super sporty with a contemporary look and feel."},
        {"product_id":39,"category":"Accessories","brand":"ASUS","name":"ASUS ROG Rapture WiFi 6 Gaming Router","imgSrc":"./images/Artboard 39.png","price":429,"desc":"Triple level game acceleration accelerate game traffic With device  game packet and game server prioritization <br/>Cutting edge hardware offers the best performance 1.8 GigaHertz Quad Core cpu and 2.5 G gaming port for ultimate performance<br/>Your own gaming mesh network Compatible with ASUS AiMesh Wi Fi system for seamless whole home coverage.Memory:256 MB Flash 1 GB RAM<br/>ASUS wrt enables support for open  advanced monitoring and control which includes device bandwidth utilization as well as device or usage prioritization<br/>"}
    ]

    var removeItemButtons = document.getElementsByClassName('delete-item');
    for (let i = 0; i < removeItemButtons.length; i++) {
        var removeButton = removeItemButtons[i];
        removeButton.addEventListener('click', removeCartItem);
    }

    var removeWishlistButtons = document.getElementsByClassName('wishlist-delete-item');
    for (let i = 0; i < removeWishlistButtons.length; i++) {
        var removeWishlistButton = removeWishlistButtons[i];
        removeWishlistButton.addEventListener('click', removeWishlistItem);
    }

    var quantityInput = document.getElementsByClassName('cart-quantity');
    for (let i = 0; i < quantityInput.length; i++){
        var input = quantityInput[i];
        input.addEventListener('change', quantityChanged);
    }

    var addToCartButtons = document.getElementsByClassName('btn-cart-add');
    for (let i = 0; i < addToCartButtons.length; i++){
        var addButton = addToCartButtons[i];
        addButton.addEventListener('click', addToCartClicked);
    }

    var addToWishlistButtons = document.getElementsByClassName('btn-heart-add');
    for (let i = 0; i < addToWishlistButtons.length; i++){
        var addToWishlistButton = addToWishlistButtons[i];
        addToWishlistButton.addEventListener('click', addToWishlistClicked);
    }

    var addWishlistToCartButtons = document.getElementsByClassName('wishlist-btn-cart-add');
    for (let i = 0; i < addWishlistToCartButtons.length; i++) {
        var addWishlistToCartButton = addWishlistToCartButtons[i];
        addWishlistToCartButton.addEventListener('click', addWishlistToCartClicked);
    }

    var showDetailButtons = document.getElementsByClassName('btn-shop-now');
    for (let i = 0; i < showDetailButtons.length; i++){
        var showDetailButton = showDetailButtons[i];
        showDetailButton.addEventListener('click', showDetailClicked);
    }

    document.getElementsByClassName('btn-check-out')[0].addEventListener('click', purchaseClicked);
}


function showDetailClicked(event){
    var button = event.target;
    var product_id = button.parentElement.parentElement.parentElement.id;
    searchProductForDetail(product_id); 
}

function searchProductForDetail(product_id){
    products.forEach(product => {
        if(product.product_id == product_id){
            showProductDetail(product.brand, product.name, product.imgSrc, product.price, product.desc);
            return;
        }
    });
}

function showProductDetail(brand, name, imgSrc, price, desc){
    var detailWrapper = document.getElementsByClassName('product-details')[0];
    detailWrapper.innerHTML = "";
    var detailRow = document.createElement('div');
    detailRow.classList.add('row');
    detailRow.classList.add('product-row');
    var detail = `
        <div class="product-img" id="product-img">
            <img src="${imgSrc}" alt="">
        </div>
        <div class="col-7 col-md-12">
            <div class="product-info">
                <h1 class="product-detail-name">
                    ${name}
                </h1>
                <div class="product-info-detail">
                    <span class="product-info-detail-title">Brand:</span>
                    <a href="#">${brand}</a>
                </div>
                <p class="product-description">
                    ${desc}
                </p>
                <div class="product-info-price">$${price}</div>
            </div>
        </div>
        <div class="product-detail-cancel"><i class='bx bxs-x-circle'></i></div>`;
    detailRow.innerHTML = detail;
    detailWrapper.append(detailRow);
    document.getElementsByClassName('product-detail-sec')[0].style.display = "block";
    detailRow.getElementsByClassName('bxs-x-circle')[0].addEventListener('click', closeProductDetail);
}

function removeWishlistItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateWishlistTotal();
}

function addToWishlistClicked(event){
    var button = event.target;
    var product_id = button.parentElement.parentElement.parentElement.parentElement.id;
    products.forEach(product => {
        if(product.product_id == product_id){
            addItemToWishlist(product.imgSrc, product.name, product.price);
        }
    });
}

function addItemToWishlist(imgSrc, name, price){
    var wishlistItems = document.getElementsByClassName('wishlist-cart-items')[0];
    var wishlistRow = document.createElement('tr');
    wishlistRow.classList.add('wishlist-cart-item');
    var cartItemNames = document.getElementsByClassName('wishlist-cart-name');
    for (let i = 0; i < cartItemNames.length; i++){
        if (cartItemNames[i].innerText == name){
            alert("This item is already added to your wishlist!");
            return;
        }
    }
    var cartContent = `
        <td><i class='bx bx-trash wishlist-delete-item'></i></td>
        <td><img class="wishlist-cart-img" src="${imgSrc}" alt=""></td>
        <td class="wishlist-cart-name">${name}</td>
        <td class="wishlist-cart-price">$${price}</td>
        <td><i class='bx bxs-cart-add wishlist-btn-cart-add'></i></td>`;
    wishlistRow.innerHTML = cartContent;
    wishlistItems.append(wishlistRow);
    wishlistRow.getElementsByClassName('wishlist-delete-item')[0].addEventListener('click', removeWishlistItem);
    wishlistRow.getElementsByClassName('wishlist-btn-cart-add')[0].addEventListener('click', addWishlistToCartClicked);
    updateWishlistTotal();
}

function addWishlistToCartClicked(event){
    var button = event.target;
    var shopItem = button.parentElement.parentElement.parentElement;
    console.log(button);
    console.log(shopItem);

    var imgSrc = shopItem.getElementsByClassName('wishlist-cart-img')[0].src;
    var name = shopItem.getElementsByClassName('wishlist-cart-name')[0].innerHTML;
    var price = shopItem.getElementsByClassName('wishlist-cart-price')[0].innerText.replace("$","");

    addItemToCart(imgSrc, name, price);
    button.parentElement.parentElement.remove();
    updateCartTotal();
    updateWishlistTotal();
}

function updateWishlistTotal(){
    var wishlistItems = document.getElementsByClassName('wishlist-cart-item');

    if(wishlistItems.length >= 1){
        document.getElementsByClassName('wishlist-count')[0].innerHTML = wishlistItems.length;
        document.getElementsByClassName('wishlist-count')[0].style.display = "block";
    }
    else{
        document.getElementsByClassName('wishlist-count')[0].style.display = "none";
    }
}

function quantityChanged(event){
    var  input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateCartTotal();
}

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

function addToCartClicked(event){
    var button = event.target;
    var product_id = button.parentElement.parentElement.parentElement.parentElement.id;
    products.forEach(product => {
        if(product.product_id == product_id){
            addItemToCart(product.imgSrc, product.name, product.price);
        }
    });
    updateCartTotal();    
}

function addItemToCart(imgSrc, name, price){
    var cardItems = document.getElementsByClassName('cart-items')[0];
    var cartRow = document.createElement('tr');
    cartRow.classList.add('cart-item');
    var cartItemNames = document.getElementsByClassName('cart-name');
    for (let i = 0; i < cartItemNames.length; i++){
        if (cartItemNames[i].innerText == name){
            alert("This item is already added to card!");
            return;
        }
    }
    var cartContent = `
        <td><i class='bx bx-trash delete-item'></i></td>
        <td><img class="cart-img" src="${imgSrc}" alt=""></td>
        <td class="cart-name">${name}</td>
        <td class="cart-price">$${price}</td>
        <td><input class="cart-quantity" type="number" min="1" max="20" value="1"></td>
        <td class="cart-subtotal">${price}</td>`;
    cartRow.innerHTML = cartContent;
    cardItems.append(cartRow);
    cartRow.getElementsByClassName('delete-item')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity')[0].addEventListener('click', quantityChanged);
}


function updateCartTotal(){

    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-item');
    var total = 0;
    var count = 0;

    for (let i = 0; i < cartRows.length; i++){
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName('cart-price')[0];
        let quantityElement = cartRow.getElementsByClassName('cart-quantity')[0];
  
        let price = parseFloat(priceElement.innerText.replace('$', ''));
        let quantity = quantityElement.value;
        cartRow.getElementsByClassName('cart-subtotal')[0].innerText = '$' + (price * quantity);
        total = total + (price * quantity);
        count += 1;

    }
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;

    if(count >= 1){
        document.getElementsByClassName('cart-count')[0].innerHTML = count;
        document.getElementsByClassName('cart-count')[0].style.display = "block";
    }
    else{
        document.getElementsByClassName('cart-count')[0].style.display = "none";
    }
}

function purchaseClicked(){
    if(inputChecked()){
        alert("Thank you for your purchase!");
        var cartItems = document.getElementsByClassName('cart-items')[0];
        while(cartItems.hasChildNodes()){
            cartItems.removeChild(cartItems.firstChild);
        }
        updateCartTotal();

        var defaultPlaceholder = `
        <h3>Your Information</h3>
        <div class="success">
            <input type="text" name="name" id="name" placeholder="Name" required>
            <small></small>
        </div>
        <div class="error">
            <input type="text" name="mail" id="mail" placeholder="Email" required>
            <small></small>
        </div>
        <div class="error">
            <input type="text" name="phone" id="phone" placeholder="Phone Number" required>
            <small></small>
        </div>
        <div class="success">
            <input type="text" name="address" id="address" placeholder="Address" required>
            <small></small>
        </div>
        <h3>Payment method</h3>
        <input type="radio" name="payment" id="cash" value="" checked>
        <label>Cash</label> <br>
        <input type="radio" name="payment" id="aba" value="">
        <label>ABA Payment</label> <br>
        <input type="submit" class="btn-flat btn-hover btn-check-out" value="Check Out">`;
        document.getElementById('submit-form').innerHTML = defaultPlaceholder;
    }
}

// input validation functions
function inputChecked(){
    var name = document.querySelector('#name');
    var mail = document.querySelector('#mail');
    var phone = document.querySelector('#phone');
    var address = document.querySelector('#address');
    var form = document.querySelector('#submit-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
     
        // validate forms
        let isEmailValid = checkEmail(mail),
            isPhoneValid = checkPhone(phone);
    
        let isFormValid = isEmailValid && isPhoneValid;

        // submit to the server if the form is valid
        if (isFormValid) {
            form.addEventListener('input', function (ch) {
                ch.preventDefault();
                switch (ch.target.id) {
                    case 'username':
                        checkUsername(name);
                        break;
                    case 'email':
                        checkEmail(mail);
                        break;
                    case 'phone':
                        checkPhone(phone);
                        break;
                    case 'address':
                        checkAddress(address);
                        break;
                }
            });
        }   
    })

    let nameSuccess = document.getElementById('name').parentElement.className;
    let mailSuccess = document.getElementById('mail').parentElement.className;
    let phoneSuccess = document.getElementById('phone').parentElement.className;
    let addressSuccess = document.getElementById('address').parentElement.className;
     
    if(nameSuccess == "success" && mailSuccess == "success" && phoneSuccess == "success" && addressSuccess == "success" ){
        return true;
    }
    else{
        return false;
    }
}

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

const checkUsername = (name) => {

    let valid = false;
    const min = 3, max = 25;
    const username = name.value.trim();

    if (!isRequired(username)) {
        showError(name, 'Username cannot be blank.');
    } 
    else if (!isBetween(username.length, min, max)) {
        showError(name, `Username must be between ${min} and ${max} characters.`)
    } 
    else {
        showSuccess(name);
        valid = true;
    }
    return valid;
}

const checkEmail = (mail) => {
    let valid = false;
    const email = mail.value.trim();
    if (!isRequired(email)) {
        showError(mail, 'Email cannot be blank.');
    } 
    else if (!isEmailValid(email)) {
        showError(mail, 'Email is not valid.')
    } 
    else {
        showSuccess(mail);
        valid = true;
    }
    return valid;
}

const checkPhone = (phone) => {

    let valid = false;

    const phoneno = phone.value.trim();

    if (!isRequired(phoneno)) {
        showError(phone, 'Phone number cannot be blank.');
    } 
    else if (!isPhoneValid(phoneno)) {
        showError(phone, 'This phone number is not valid');
    } 
    else {
        showSuccess(phone);
        valid = true;
    }

    return valid;
};

const checkAddress = (address) => {

    let valid = false;

    const addr = address.value.trim();

    if (!isRequired(addr)) {
        showError(address, 'Address cannot be blank.');
    } 
    else {
        showSuccess(address);
        valid = true;
    }

    return valid;
};

const isEmailValid = (mail) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mail);
};

const isPhoneValid = (phone) => {
    const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneno.test(phone);
};

const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};
// click event to close product detail
var close = document.getElementsByClassName('bxs-x-circle')[0];
close.addEventListener('click', closeProductDetail);

function closeProductDetail(event){
    var closeButton = event.target;
    closeButton.parentElement.parentElement.parentElement.parentElement.style.display = "none";
}


