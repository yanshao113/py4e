myData = [
[50.06448229999999,19.9232752, 'Aleja Adama Mickiewicza 30, 30-059 Kraków, Poland'],
[52.2394019,21.0150792, 'Krakowskie Przedmieście 5, Krakowskie Przedmieście 5, 00-068 Warszawa, Poland'],
[30.0201508,31.49908139999999, 'Admin building AUC قسم أول القاهرة الجديدة، محافظة القاهرة‬ 4728120،، New Cairo 1, Cairo Governorate 4728120, Egypt'],
[33.4242399,-111.9280527, 'Tempe, AZ 85281, USA'],
[38.0399395,23.8030909, 'Monumental Plaza, Building C, 1st Floor, Leof. Kifisias 44, Marousi 151 25, Greece'],
[28.3588163,75.58802039999999, 'Vidya Vihar, Pilani, Rajasthan 333031, India'],
[6.8920758,3.7181452, '121103, Ilishan-Remo, Ogun State, Nigeria'],
[25.2677203,82.99125819999999, 'Ajagara, Varanasi, Uttar Pradesh 221005, India'],
[12.9504048,77.5020617, 'Mysore Rd, Jnana Bharathi, Bengaluru, Karnataka 560056, India'],
[31.5500848,-97.11354, '1311 S 5th St, Waco, TX 76706, USA'],
[39.9619537,116.3662615, '19 Xin Wai Da Jie, Beitaipingzhuang, Hai Dian Qu, Bei Jing Shi, China, 100875'],
[53.8930049,27.545623, 'prasp. Niezaliežnasci 4, Minsk, Belarus'],
[44.8184518,20.4575913, 'Studentski trg 1, Beograd, Serbia'],
[42.5030333,-89.0309048, '700 College St, Beloit, WI 53511, USA'],
[53.8930049,27.545623, 'prasp. Niezaliežnasci 4, Minsk, Belarus'],
[31.261426,34.7995546, 'David Ben Gurion Blvd 1, Beer Sheva, Israel'],
[10.6779085,78.74454879999999, 'Palkalaiperur, Tiruchirappalli, Tamil Nadu 620024, India'],
[42.3504997,-71.1053991, 'Boston, MA 02215, USA'],
[35.3050053,-120.6624942, '1 Grand Ave, San Luis Obispo, CA 93407, USA'],
[34.1813584,-117.3231875, '5500 University Pkwy, San Bernardino, CA 92407, USA'],
[51.5210416,-0.1746649, '25 Paddington Grn, London W2 1NB, UK'],
[40.8075355,-73.9625727, '116th and Broadway, New York, NY 10027, USA'],
[52.0686347,-0.6087410999999999, 'Cranfield, Bedford MK43, UK'],
[50.1030364,14.3912841, '166 36 Prague 6, Czechia'],
[43.7044406,-72.2886934, 'Hanover, NH 03755, USA'],
[37.3192806,-122.0447919, '21250 Stevens Creek Blvd, Cupertino, CA 95014, USA'],
[51.3769424,7.4946354, 'Universitätsstraße 11, 58097 Hagen, Germany'],
[48.4331922,35.0427966, 'Haharina Ave, 72, Dnipro, Dnipropetrovska oblast, Ukraine, 49000'],
[38.430691,27.13692, 'No: 144 35210, Alsancak, Cumhuriyet Blv, 35220 Konak/İzmir, Türkiye'],
[39.9566127,-75.18994409999999, '3141 Chestnut St, Philadelphia, PA 19104, USA'],
[30.267153,-97.7430608, 'Austin, TX, USA'],
[36.0014258,-78.9382286, 'Durham, NC 27708, USA'],
[45.7864448,4.7641329, '23 Av. Guy de Collongue, 69130 Écully, France'],
[48.709445,2.1661629, 'CentraleSupélec, 3 Rue Joliot Curie, 91190 Gif-sur-Yvette, France'],
[36.1028244,-79.5023649, '100 Campus Dr, Elon, NC 27244, USA'],
[54.9134845,9.7782317, 'Alsion 4, 6400 Sønderborg, Denmark'],
[51.24683899999999,6.7916647, 'Münsterstraße 156, 40476 Düsseldorf, Germany'],
[47.7233835,13.0871253, 'Urstein S 1, 5412 Salzburg, Austria'],
[-21.2922457,-50.3428431, 'State of São Paulo, Brazil'],
[45.2461012,19.8516968, 'Trg Dositeja Obradovića 6, Novi Sad 106314, Serbia'],
[40.7529167,-73.4266988, '2350 NY-110, Farmingdale, NY 11735, USA'],
[-19.870682,-43.9677359, 'Av. Pres. Antônio Carlos, 6627 - Pampulha, Belo Horizonte - MG, 31270-901, Brazil'],
[26.3858316,-80.0973094, '3998, Boca Raton, FL 33431, USA'],
[42.7789743,-72.05553929999999, '40 University Dr, Rindge, NH 03461, USA'],
[26.1540389,91.66296679999999, 'Gopinath Bordoloi Nagar, Jalukbari, Guwahati, Assam 781014, India'],
[38.8314578,-77.31174709999999, '4400 University Dr, Fairfax, VA 22030, USA'],
[38.8977953,-77.0129087, '600 New Jersey Ave NW, Washington, DC 20001, USA'],
[33.753068,-84.38528190000001, 'Atlanta, GA 30302, USA'],
[42.9097484,-85.7630885, 'Grandville, MI, USA'],
[50.87485419999999,4.7077677, 'Andreas Vesaliusstraat 13, 3000 Leuven, Belgium'],
[21.0072964,105.8426436, '1 Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội, Vietnam'],
[31.7945578,35.2414009, 'Jerusalem'],
[17.4448649,78.34981379999999, 'Professor CR Rao Rd, Gachibowli, Hyderabad, Telangana 500032, India'],
[26.5123388,80.2329, 'G66M+W5J, Kalyanpur, Kanpur, Uttar Pradesh 208016, India'],
[58.595272,25.013607, 'Estonia'],
[45.4408474,12.3155151, 'Venice, Metropolitan City of Venice, Italy'],
[41.8348731,-87.6270059, '10 W 35th St, Chicago, IL 60616, USA'],
[41.525031,-88.0817251, 'Joliet, IL, USA'],
[20.593684,78.96288, 'India'],
[22.3149274,87.31053109999999, 'Kharagpur, West Bengal 721302, India'],
[23.8142953,86.44118069999999, 'Police Line Road, Main Campus IIT (ISM, near Rani Bandh, IIT (ISM, Hirapur, Sardar Patel Nagar, Dhanbad, Jharkhand 826004, India'],
[39.1682449,-86.52300729999999, '107 S Indiana Ave, Bloomington, IN 47405, USA'],
[39.1682449,-86.52300729999999, '107 S Indiana Ave, Bloomington, IN 47405, USA'],
[12.3714277,-1.5196603, 'Koulouba, Ouagadougou, Burkina Faso'],
[18.4880037,-69.96249499999999, 'Av. de Los Próceres 49, Santo Domingo 10602, Dominican Republic'],
[17.4448649,78.34981379999999, 'Professor CR Rao Rd, Gachibowli, Hyderabad, Telangana 500032, India'],
[52.2766643,104.2777445, 'Ulitsa Karla Marksa, 1, Irkutsk, Irkutskaya oblast, Russia, 664003'],
[22.4988822,88.3714123, '188, Raja Subodh Chandra Mallick Rd, Jadavpur, Kolkata, West Bengal 700032, India'],
[17.4932682,78.3913929, 'F9VR+8H2, Ashok Nagar, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500085, India'],
[28.5398035,77.1664047, 'New Mehrauli Road, JNU Ring Rd, New Delhi, Delhi 110067, India'],
[32.4950392,35.9912257, '3030, الرمثا، Jordan'],
[39.1974437,-96.5847249, 'Manhattan, KS 66506, USA'],
[42.290035,-85.598145, '1200 Academy St, Kalamazoo, MI 49006, USA'],
[54.898991,23.912825, 'K. Donelaičio g. 73, 44249 Kaunas, Lithuania'],
[54.898991,23.912825, 'K. Donelaičio g. 73, 44249 Kaunas, Lithuania'],
[55.7906985,49.1216444, 'ulitsa Kremlevskaya, 18, Kazan, Respublika Tatarstan, Russia, 420008'],
[41.1497945,-81.34331590000001, '800 E Summit St, Kent, OH 44240, USA'],
[49.9953019,36.2412463, 'Marshala Bazhanova St, 17, Kharkiv, Kharkivska oblast, Ukraine, 61002'],
[13.6512522,100.4964428, '126 Thanon Pracha Uthit, Khwaeng Bang Mot, Khet Thung Khru, Krung Thep Maha Nakhon 10140, Thailand'],
[53.2871307,69.40444939999999, 'Kokshetau 020000, Kazakhstan'],
[50.4488974,30.456977, 'Peremohy Ave, 37, Kyiv, Ukraine, 03056'],
[50.4488974,30.456977, 'Peremohy Ave, 37, Kyiv, Ukraine, 03056'],
[50.4501,30.5234, 'Kyiv, Ukraine, 02000'],
[46.4672485,-80.9757296, '935 Ramsey Lake Rd, Sudbury, ON P3E 2C6, Canada'],
[51.7537146,19.4517176, 'Stefana Żeromskiego 116, 90-924 Łódź, Poland'],
[49.840348,24.0222967, 'Universytetska St, 1, Lviv, Lvivska oblast, Ukraine, 79000'],
[42.701848,-84.4821719, 'Michigan, USA'],
[13.0660293,80.28317190000001, 'Navalar Nagar, Chepauk, Triplicane, Chennai, Tamil Nadu 600005, India'],
[53.42119599999999,58.98193999999999, 'Lenin Ave, 38, Magnitogorsk, Chelyabinskaya oblast, Russia, 455000'],
[34.3129573,48.8285422, 'Hamadan Province, Malayer, جاده سلامت، 8R7H+5CM, Iran'],
[39.4164811,-81.4498947, '215 5th St, Marietta, OH 45750, USA'],
[44.8199188,20.4587075, 'Studentski trg 16, Beograd 105104, Serbia'],
[42.701848,-84.4821719, 'Michigan, USA'],
[39.88983820000001,32.780086, 'Üniversiteler, Dumlupınar Blv. 1/6 D:133, 06800 Çankaya/Ankara, Türkiye'],
[37.9537078,-91.7756271, '106, Parker Hall, 300 W 13th St, Rolla, MO 65409, USA'],
[-37.9015913,145.1155133, 'City of Monash, VIC, Australia'],
[-37.9142416,145.1346592, 'Wellington Rd, Clayton VIC 3800, Australia'],
[-38.3090975,146.4255391, '1 Northways Rd, Churchill VIC 3842, Australia'],
[25.6515649,-100.28954, 'Av. Eugenio Garza Sada 2501 Sur, Tecnológico, 64849 Monterrey, N.L., Mexico'],
[55.6502051,37.6643098, 'Kashira Hwy, 31, Moskva, Russia, 115409'],
[55.9297243,37.5199434, 'Institutskiy Pereulok, 9, Dolgoprudny, Moskovskaya oblast, Russia, 141701'],
[55.70393490000001,37.5286695, 'Ulitsa Kolmogorova, 1, Moskva, Russia, 119991'],
[22.2530656,84.9009808, 'National Institute of Technology, Sector 1, Rourkela, Odisha 769008, India'],
[40.72951339999999,-73.9964609, 'New York, NY 10012, USA'],
[21.1478747,79.03957199999999, '42XQ+4RW, Amravati Rd, Gokulpeth, Nagpur, Maharashtra 440033, India'],
[1.3483099,103.6831347, '50 Nanyang Ave, Singapore 639798'],
[31.3958746,75.5358439, 'Grand Trunk Road, Barnala - Amritsar Bypass Rd, Jalandhar, Punjab 144011, India'],
[25.0173405,121.5397518, 'No. 1, Section 4, Roosevelt Rd, Da’an District, Taipei City, Taiwan 10617'],
[-12.0238022,-77.04840589999999, 'Av. Túpac Amaru 210, Rímac 15333, Peru'],
[41.772663,-88.1440142, '30 N Brainard St, Naperville, IL 60540, USA'],
[42.339904,-71.0898892, '360 Huntington Ave, Boston, MA 02115, USA'],
[42.0564594,-87.67526699999999, '633 Clark St, Evanston, IL 60208, USA'],
[55.13719099999999,36.607059, 'Obninsk, Kaluga Oblast, Russia, 249034'],
[36.8853217,-76.3058786, '5115 Hampton Blvd, Norfolk, VA 23529, USA'],
[42.25538520000001,-121.7852487, '3201 Campus Dr, Klamath Falls, OR 97601, USA'],
[19.4436005,-70.6843785, 'Autopista Duarte Km 1 1/2, Santiago De Los Caballeros 51000, Dominican Republic'],
[35.8012314,51.5028533, 'Tehran Province, Tehran, اتوبان ارتش کوی نفت, Nakhl St, RG23+F4X, Iran'],
[40.7982133,-77.8599084, 'State College, PA 16801, USA'],
[44.4386064,26.0494925, 'Splaiul Independenței 313, București 060042, Romania'],
[45.7536393,21.2251614, 'Piața Victoriei 2, Timișoara 300006, Romania'],
[12.0182619,79.8568461, 'Pondicherry University, Chinna Kalapet, Kalapet, Puducherry 605014, India'],
[-33.4418768,-70.64008079999999, 'Av. Libertador Bernardo OHiggins 340, Santiago, Región Metropolitana, Chile'],
[45.5111153,-122.6833385, '1825 SW Broadway, Portland, OR 97201, USA'],
[40.4237054,-86.92119459999999, '610 Purdue Mall, West Lafayette, IN 47907, USA'],
[12.9237228,77.4987012, 'Mysore Rd, RV Vidyaniketan, Post, Bengaluru, Karnataka 560059, India'],
[42.7297628,-73.67888839999999, '110 8th St, Troy, NY 12180, USA'],
[41.0815852,-74.17610150000002, '505 Ramapo Valley Rd, Mahwah, NJ 07430, USA'],
[43.08484869999999,-77.67153549999999, '1 Lomb Memorial Dr, Rochester, NY 14623, USA'],
[10.7285131,79.0184111, 'Trichy-Tanjore Road, Thirumalaisamudram, Thanjavur, Tamil Nadu 613401, India'],
[59.941894,30.2989198, 'University Embankment, 7/9, Sankt-Peterburg, Russia, 199034'],
[59.929491,30.296608, 'Bolshaya Morskaya Ulitsa, 67, Sankt-Peterburg, Russia, 190000'],
[60.0076235,30.3731954, 'Politekhnicheskaya Ulitsa, 29, Sankt-Peterburg, Russia, 195251'],
[37.7241492,-122.4799405, '1600 Holloway Ave, San Francisco, CA 94132, USA'],
[37.3351874,-121.8810715, '1 Washington Sq, San Jose, CA 95192, USA'],
[31.0252201,121.4337784, 'China, Shang Hai Shi, Min Hang Qu, 老闵行东川路 邮政编码: 200240'],
[35.7036491,51.3517033, 'Tehran, Azadi Ave, P932+FM4, Iran'],
[10.408363,-66.8755735, 'Sartenejas, Caracas, Miranda, Venezuela'],
[49.2780937,-122.9198833, '8888 University Dr W, Burnaby, BC V5A 1S6, Canada'],
[54.7845032,32.0452469, 'Ulitsa Przhevalskogo, 4, Smolensk, Smolenskaya oblast, Russia, 214000'],
[38.3409222,-122.6730677, '1801 E Cotati Ave, Rohnert Park, CA 94928, USA'],
[47.224719,39.7283339, 'ул, Bolshaya Sadovaya Ulitsa, 105/42, Rostov, Rostovskaya oblast, Russia, 344006'],
[44.4332856,26.100986, 'Strada Ion Ghica 13, București 030045, Romania'],
[37.42410599999999,-122.1660756, 'Stanford, CA, USA'],
[-22.8184393,-47.0647206, 'Cidade Universitária Zeferino Vaz - Barão Geraldo, Campinas - SP, 13083-970, Brazil'],
[43.4553461,-76.5104973, 'Oswego, NY, USA'],
[-33.9328078,18.864447, 'Stellenbosch Central, Stellenbosch, South Africa'],
[42.05810530000001,-71.08091300000001, '320 Washington St, North Easton, MA 02357, USA'],
[59.4387321,24.7713836, 'Narva mnt 25, 10120 Tallinn, Estonia'],
[59.3948487,24.6719711, 'Ehitajate tee 5, 12616 Tallinn, Estonia'],
[61.4977524,23.7609535, 'Tampere, Finland'],
[30.7924391,30.9991409, 'QXRX+XMC, El-Gaish, Tanta Qism 2, Tanta, Gharbia Governorate 6632110, Egypt'],
[32.7561692,-97.3381909, '300 Trinity Campus Cir, Fort Worth, TX 76102, USA'],
[46.7692463,23.5857078, 'Strada Memorandumului 28, Cluj-Napoca 400114, Romania'],
[32.7767783,35.0231271, 'Haifa, 3200003, Israel'],
[32.1133141,34.8043877, 'Tel Aviv-Yafo, Israel'],
[12.9456381,80.2077491, 'Main Block, Velachery Rd, Narayanapuram, Pallikaranai, Chennai, Tamil Nadu 600100, India'],
[56.95080979999999,24.1163132, 'Raiņa bulvāris 19, Centra rajons, Rīga, LV-1586, Latvia'],
[53.4668498,-2.2338837, 'Oxford Rd, Manchester M13 9PL, UK'],
[-25.7676604,28.1992624, 'Preller St, Muckleneuk, Pretoria, 0002, South Africa'],
[38.0516801,-84.49334189999999, '300 N Broadway, Lexington, KY 40508, USA'],
[42.4085371,-71.1182729, '419 Boston Ave, Medford, MA 02155, USA'],
[37.87015100000001,-122.2594606, 'University Avenue and, Oxford St, Berkeley, CA 94720, USA'],
[34.0699182,-118.4438495, 'Los Angeles, CA 90095, USA'],
[32.8800604,-117.2340135, '9500 Gilman Dr, La Jolla, CA 92093, USA'],
[40.1019523,-88.2271615, 'Champaign, IL, USA'],
[38.9869183,-76.9425543, 'College Park, MD 20742, USA'],
[-25.7676604,28.1992624, 'Preller St, Muckleneuk, Pretoria, 0002, South Africa'],
[-34.5998875,-58.37306949999999, 'Viamonte 430, C1053 CABA, Argentina'],
[41.4065636,2.1945816, 'Rambla del Poblenou, 156, 08018 Barcelona, Spain'],
[34.0223519,-118.285117, 'Los Angeles, CA 90007, USA'],
[43.076592,-89.4124875, 'Madison, WI, USA'],
[10.4899673,-66.8913397, 'Facultad de Ciencias, Sierra Maestra, Caracas 1040, Distrito Capital, Venezuela'],
[40.4454368,-3.7299424, 'Av. Séneca, 2, 28040 Madrid, Spain'],
[19.332795,-99.1876103, 'Av. Universidad 3004, Copilco Universidad, Coyoacán, 04510 Ciudad de México, CDMX, Mexico'],
[9.9987964,-84.11147489999999, 'Avenida 1, Calle 9 Heredia 86 Heredia, Heredia, 40101, Costa Rica'],
[4.6381938,-74.08404639999999, 'Cra 45, Bogotá, Colombia'],
[-16.5005605,-68.1342962, 'C. Colombia 154, La Paz, Bolivia'],
[-34.5998875,-58.37306949999999, 'Viamonte 430, C1053 CABA, Argentina'],
[38.9934998,-3.9254365, 'Rectorado UCLM, C. Altagracia, 50, 13001 Ciudad Real, Spain'],
[4.570868,-74.297333, 'Colombia'],
[10.1732454,-64.6525884, '58FW+7XV, Via Alterna, Puerto La Cruz 6001, Anzoátegui, Venezuela'],
[14.5878975,-90.5517222, 'HCQX+582, 11 Avenida, Cdad. de Guatemala 01012, Guatemala'],
[41.6569271,-4.7140547, 'C/Plaza de Santa Cruz, 8, 47002 Valladolid, Spain'],
[4.855814899999999,-74.0417628, 'Chía, Cundinamarca, Colombia'],
[14.603762,-90.48924799999999, '18 Avenida 11-95 Guatemala, Interior UVG, Cdad. de Guatemala 01015, Guatemala'],
[-7.137748500000001,-34.8458974, 'Campus I Lot. Cidade Universitaria - Castelo Branco, João Pessoa - PB, 58051-900, Brazil'],
[-27.5999666,-48.5194152, 'R. Eng. Agronômico Andrei Cristian Ferreira, s/n - Trindade, Florianópolis - SC, 88040-900, Brazil'],
[-30.0339726,-51.2190483, 'Farroupilha, Porto Alegre - RS, 90040-040, Brazil'],
[-22.8674532,-43.2151914, 'R. Antônio Barros de Castro, 119 - Cidade Universitária da Universidade Federal do Rio de Janeiro, Rio de Janeiro - RJ, 21941-853, Brazil'],
[38.7222524,-9.1393366, 'Lisbon, Portugal'],
[-23.5613991,-46.7307891, 'R. da Reitoria - R. Cidade Universitária, 374 - Butantã, São Paulo - SP, 05508-220, Brazil'],
[41.5607319,-8.3962368, 'R. da Universidade, 4710-057 Braga, Portugal'],
[-7.7713847,110.3774998, '69HG+CXX, Bulaksumur, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281, Indonesia'],
[37.3925485,-121.9828037, '3000 Mission College Blvd, Santa Clara, CA 95054, USA'],
[39.4808896,-0.3410992, 'Camí de Vera, s/n, 46022 València, Valencia, Spain'],
[50.6696767,4.615875, 'Pl. de lUniversité 1, 1348 Ottignies-Louvain-la-Neuve, Belgium'],
[53.3064504,-6.2186939, 'University College Dublin, Belfield, Dublin 4, Ireland'],
[48.1507496,11.5805262, 'Geschwister-Scholl-Platz 1, 80539 München, Germany'],
[41.0753688,-81.5123424, '302 E Buchtel Ave, Akron, OH 44325, USA'],
[53.5232189,-113.5263186, '116 St & 85 Ave, Edmonton, AB T6G 2R3, Canada'],
[52.35581819999999,4.955726299999999, '1012 WX Amsterdam, Netherlands'],
[36.0686895,-94.1748471, 'Fayetteville, AR 72701, USA'],
[37.968196,23.7786871, 'Athens 157 72, Greece'],
[44.8184518,20.4575913, 'Studentski trg 1, Beograd, Serbia'],
[52.4508168,-1.9305135, 'Birmingham, UK'],
[-34.5998875,-58.37306949999999, 'Viamonte 430, C1053 CABA, Argentina'],
[35.657506,-97.4709491, '100 N University Dr, Edmond, OK 73034, USA'],
[41.7886079,-87.5987133, '5801 S Ellis Ave, Chicago, IL 60637, USA'],
[39.1329219,-84.51495039999999, '2600 Clifton Ave, Cincinnati, OH 45221, USA'],
[40.00758099999999,-105.2659417, 'Boulder, CO 80309, USA'],
[41.8077414,-72.2539805, 'Storrs, CT 06269, USA'],
[32.8449929,-96.9186842, '1845 E Northgate Dr, Irving, TX 75062, USA'],
[47.5536257,21.6215102, 'Debrecen, Egyetem tér 1, 4032 Hungary'],
[39.6779504,-75.7506114, 'Newark, DE 19716, USA'],
[49.5979117,11.0045437, 'Schloßplatz 4, 91054 Erlangen, Germany'],
[51.87772589999999,0.9472069000000001, 'Wivenhoe Park, Colchester CO4 3SQ, UK'],
[38.572984,-7.905253999999999, 'Largo dos Colegiais 2, 7004-516 Évora, Portugal'],
[29.644591,-82.35348400000001, 'Gainesville, FL 32611, USA'],
[57.6983855,11.9715823, 'Universitetsplatsen 1, 405 30 Göteborg, Sweden'],
[54.0949653,13.374584, 'Domstraße 11, 17489 Greifswald, Germany'],
[53.5642276,9.9950229, 'Mittelweg 177, 20146 Hamburg, Germany'],
[21.3008904,-157.8173481, 'Spalding Hall, 2540 Maile Way, Honolulu, HI 96822, USA'],
[60.1726348,24.9510419, 'Yliopistonkatu 4, 00100 Helsinki, Finland'],
[8.4858957,4.674583, 'P.M.B, 1515, 240102, Ilorin, Kwara, Nigeria'],
[9.683893699999999,80.0230567, 'M2MF+H63, Ramanathan Rd, Jaffna, Sri Lanka'],
[38.9543439,-95.2557961, '1450 Jayhawk Blvd, Lawrence, KS 66045, USA'],
[8.5032375,76.9473306, 'University of Kerala Senate House Campus, Palayam, Thiruvananthapuram, Kerala 695034, India'],
[51.5229378,-0.1308206, 'Senate House, Malet St, London WC1E 7HU, UK'],
[36.7200246,-4.4161508, 'Av. de Cervantes, 2, 29016 Málaga, Spain'],
[3.1217233,101.6536844, '50603 Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia'],
[53.4668498,-2.2338837, 'Oxford Rd, Manchester M13 9PL, UK'],
[42.277145,-83.7382071, '500 S State St, Ann Arbor, MI 48109, USA'],
[38.9403808,-92.32773750000001, 'Columbia, MO 65211, USA'],
[6.7951276,79.90086699999999, 'Bandaranayake Mawatha, Moratuwa 10400, Sri Lanka'],
[18.9294242,72.8309786, 'Mahatma Gandhi Road, Mantralaya, Fort, Mumbai, Maharashtra 400032, India'],
[41.4925374,-99.9018131, 'Nebraska, USA'],
[40.813616,-96.7025955, 'Lincoln, NE, USA'],
[41.2921105,-72.96189919999999, '300 Boston Post Rd, West Haven, CT 06516, USA'],
[-33.917347,151.2312675, 'Sydney NSW 2052, Australia'],
[41.7055716,-86.2353388, 'Notre Dame, IN 46556, USA'],
[35.1987162,-97.4448963, '660 Parrington Oval, Norman, OK 73019, USA'],
[45.42310639999999,-75.68313289999999, '75 Laurier Ave E, Ottawa, ON K1N 6N5, Canada'],
[51.7548164,-1.2543668, 'Oxford, UK'],
[45.4067393,11.8771509, 'Via VIII Febbraio, 2, 35122 Padova PD, Italy'],
[45.1867045,9.1570944, 'S.da Nuova, 65, 27100 Pavia PV, Italy'],
[39.9522188,-75.1932137, 'Philadelphia, PA 19104, USA'],
[37.94160129999999,23.6529793, 'Karaoli ke Dimitriou 80, Pireas 185 34, Greece'],
[-25.7545492,28.2314476, 'Lynnwood Rd, Hatfield, Pretoria, 0002, South Africa'],
[40.9613376,-5.666925099999999, 'Patio de Escuelas, 1, 37008 Salamanca, Spain'],
[-23.5613991,-46.7307891, 'R. da Reitoria - R. Cidade Universitária, 374 - Butantã, São Paulo - SP, 05508-220, Brazil'],
[43.8563105,18.395895, 'Zmaja od Bosne 8B, Sarajevo 71000, Bosnia and Herzegovina'],
[34.0223519,-118.285117, 'Los Angeles, CA 90007, USA'],
[-33.9328078,18.864447, 'Stellenbosch Central, Stellenbosch, South Africa'],
[58.37798299999999,26.7290383, 'Tartu, Estonia'],
[35.7022192,51.39573069999999, 'Tehran, استان تهران تهران Enghelab Square، 16 Azar St, Iran'],
[30.2849185,-97.7340567, 'Austin, TX 78712, USA'],
[30.2849185,-97.7340567, 'Austin, TX 78712, USA'],
[43.6628917,-79.39565640000001, '27 Kings College Cir, Toronto, ON M5S, Canada'],
[48.5291308,9.0425313, 'Geschwister-Scholl-Platz, 72074 Tübingen, Germany'],
[52.2396538,6.84979, 'Drienerlolaan 5, 7522 NB Enschede, Netherlands'],
[40.7649368,-111.8421021, '201 Presidents Cir, Salt Lake City, UT 84112, USA'],
[48.21318549999999,16.3600504, 'Universitätsring 1, 1010 Wien, Austria'],
[52.2403463,21.0186012, 'Krakowskie Przedmieście 26/28, 00-927 Warszawa, Poland'],
[47.7589719,-122.190707, '18115 Campus Way NE, Bothell, WA 98011, USA'],
[43.4722854,-80.5448576, '200 University Ave W, Waterloo, ON N2L 3G1, Canada'],
[30.5445714,-87.2119776, '11000 University Pkwy, Pensacola, FL 32514, USA'],
[43.076592,-89.4124875, 'Madison, WI, USA'],
[31.47898409999999,74.2661627, 'F7H8+HFV, Canal Rd, Quaid-i-Azam Campus, Lahore, Punjab, Pakistan'],
[-26.1928836,28.0304733, '1 Jan Smuts Ave, Braamfontein, Johannesburg, 2000, South Africa'],
[54.7226447,25.3378447, 'Saulėtekio al. 11, 10223 Vilnius, Lithuania'],
[54.6825757,25.2876469, 'Universiteto g. 3, 01513 Vilnius, Lithuania'],
[37.5526695,-77.4527359, '907 Floyd Ave, Richmond, VA 23284, USA'],
[37.22838429999999,-80.42341669999999, 'Blacksburg, VA 24061, USA'],
[18.4595591,73.8854285, 'Vishwakarma Institute of Information Technology, Survey No. 2/3/4, VIM Private Rd, Kapil Nagar, Kondhwa, Pune, Maharashtra 411048, India'],
[52.2403463,21.0186012, 'Krakowskie Przedmieście 26/28, 00-927 Warszawa, Poland'],
[46.7298283,-117.1745403, '150 E Spring St, Pullman, WA 99163, USA'],
[42.3591388,-83.06654619999999, '42 W Warren Ave, Detroit, MI 48202, USA'],
[41.1913021,-111.9440252, 'Ogden, UT 84403, USA'],
[31.90375409999999,34.8080315, 'Herzl St 234, Rehovot, Israel'],
[40.684929,-111.8699469, '4001 S 700 E #300, Millcreek, UT 84107, USA'],
[39.1498581,-84.4740668, '3800 Victory Parkway, 1630 Musketeer Dr, Cincinnati, OH 45207, USA'],
[30.5882724,31.4831525, 'HFQM+872, Shaibet an Nakareyah, Zagazig 2, Ash Sharqia Governorate 7120001, Egypt'],
[33.6850236,73.05474199999999, '2 Ashfaq Ahmed Rd, H-8/2 H 8/2 H-8, Islamabad, Islamabad Capital Territory 44000, Pakistan'],
[33.4242399,-111.9280527, 'Tempe, AZ 85281, USA'],
[-17.930178,-43.7908453, 'State of Minas Gerais, Brazil'],
[39.1974437,-96.5847249, 'Manhattan, KS 66506, USA'],
[40.4454368,-3.7299424, 'Av. Séneca, 2, 28040 Madrid, Spain'],
[38.28923,21.785369, 'Panepistimioupoli Patron 265 04, Greece'],
[45.4067393,11.8771509, 'Via VIII Febbraio, 2, 35122 Padova PD, Italy']
];
