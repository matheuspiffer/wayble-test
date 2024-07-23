import { JobDataBuilder } from "@/utils/job-data-builder";

const jobs = [
    {
      id: '75442f6d-7de0-4d0a-b556-7302261e7c74',
      companyName: 'Shields - Metz',
      title: 'Senior Research Architect',
      description: 'Aut demitto correptius. Considero hic contigo. Beneficium tonsor tricesimus deficio antiquus acerbitas desparatus unus tribuo.\n' +
        'Deludo fugiat tersus basium sto pauci. Saepe tabella ratione. Veritatis utrimque theatrum.\n' +
        'Abbas capio usitas. Antea abundans super cavus una aqua. Supra tollo statua arbitro tondeo comedo cunabula cubicularis beneficium.',
      address: '204 Bashirian Ranch',
      city: 'East Violaberg',
      state: 'Tennessee',
      zipCode: '27109-3951'
    },
    {
      id: '439d5507-bd1e-4656-9688-3823a718d098',
      companyName: 'Hintz Group',
      title: 'District Integration Technician',
      description: 'Sophismata totus cohibeo. Vomer desidero praesentium. Delicate beneficium cunabula alveus trans aggredior contigo succurro vereor.\n' +
        'Comprehendo acceptus aestus spiculum coma ea. Sit subnecto adduco cursus damno adfero. Amissio utroque decet qui curia.\n' +
        'Vigilo dedico atrox tabernus esse defleo vociferor tantum ventito statua. Absorbeo tristis conatus ullam. Tabgo auditor vacuus amicitia.',
      address: '83808 Pink Shoals',
      city: 'New Kariannetown',
      state: 'Iowa',
      zipCode: '64698'
    },
    {
      id: 'a3decf6c-5ad4-4d0d-b3e4-482b12c3f820',
      companyName: 'Shields - Dietrich',
      title: 'Senior Assurance Administrator',
      description: 'Antepono amplitudo unde tamisium bibo quaerat. Curvo sed comitatus ars rem soleo aestivus volup aro. Usque vero apto denuncio ducimus cresco aiunt ducimus.\n' +
        'Quaerat ver vapulus conscendo aperiam ubi vaco animi cornu. Absorbeo doloremque statim illo villa adfero vulpes derelinquo. Subseco sumptus libero volaticus adnuo paens anser.\n' +
        'Vilitas advenio crebro absens umerus auctus aestas conturbo. Ad corona titulus minus vehemens vinco. Sophismata quaerat speciosus tunc aranea tonsor.',
      address: '5893 S Main Avenue',
      city: 'South Milton',
      state: 'Wyoming',
      zipCode: '06561-0548'
    },
    {
      id: '28a2e478-fd0e-4bd3-91db-f9d3bc599019',
      companyName: 'Schiller, Friesen and Leuschke',
      title: 'Investor Interactions Technician',
      description: 'Vergo creber similique utrimque. Depraedor nostrum desino conturbo ipsa voluptate adeptio. Teres cena amet cresco.\n' +
        'Cum dignissimos collum attonbitus adhaero atrocitas stillicidium sopor. Vesica cultellus collum. Corrumpo super volubilis nisi.\n' +
        'Labore consuasor attollo usque ubi quas illum. Vester cibus aggero vester bestia. Vulnus vis cometes vilitas templum.', 
      address: '1832 Farm Close',
      city: 'Orlostad',
      state: 'North Dakota',
      zipCode: '24499'
    },
    {
      id: '87bbe939-7ff4-4727-b635-61803792be85',
      companyName: 'Emmerich, Wolf and Mills',
      title: 'Chief Integration Planner',
      description: 'Iste spargo cilicium provident. Veniam abbas a decretum utrimque. Commemoro capto vinculum tepesco color sumo.\n' +
        'Uberrime conicio campana tremo veniam paens cupiditate ceno testimonium studio. Vinculum tot conventus beatae asporto civis tergeo bene derelinquo sublime. Abutor timor capio addo at supplanto curriculum theca amo.\n' +
        'Molestias non summisse tergum succedo conatus repellat adficio volubilis. Calcar nihil coniuratio clementia adstringo. Animus valde rem sortitus suscipio sursum hic civis victus.',
      address: '266 Bernie Path',
      city: 'Lake Joeside',
      state: 'Oklahoma',
      zipCode: '83386'
    },
    {
      id: 'a60223a0-09e2-4896-89b4-9fe9948dee36',
      companyName: 'Cassin, Hoeger and Lubowitz',
      title: 'Central Brand Architect',
      description: 'Abbas quis pecco tactus adiuvo demoror clibanus. Villa abduco cicuta depulso bis. Deprimo sollers explicabo vesica bellum acerbitas.\n' +
        'Contra turbo quas allatus ante velut. Comitatus trepide sophismata voluptas expedita non aduro sponte conor. Cursim ab agnosco inflammatio contigo officiis cicuta angustus acies.\n' +
        'Cura auctor solus. Vigor iure molestiae curriculum bene natus velit. Ancilla deleo ventosus sui velit tempora rerum sustineo amplitudo autem.',
      address: '622 Alfred Street',
      city: 'Muellerworth',
      state: 'North Dakota',
      zipCode: '06627-4151'
    },
    {
      id: '774e0d8e-a4b8-4551-b7b2-b4031f4010ef',
      companyName: 'Bosco - Bergstrom',
      title: 'National Operations Orchestrator',
      description: 'Taedium aer attonbitus considero terminatio pel condico alveus volva vilicus. Alii ulciscor temperantia paulatim artificiose necessitatibus aliquid defungo. Cerno pax decretum deporto curatio patruus truculenter decet titulus.\n' +     
        'Blanditiis aliqua impedit bonus. Adipisci cunctatio tergiversatio ascisco amitto. Carbo baiulus ait.\n' +
        'Contra vilis vitiosus acerbitas. Talio cogito universe. Defleo sublime debeo timor crudelis amplitudo.',
      address: '8957 S Main Street',
      city: 'New Wilma',
      state: 'Utah',
      zipCode: '02198'
    },
    {
      id: 'f4807883-0020-4092-b66c-5ceb6ae6f85c',
      companyName: "O'Kon - Rice",
      title: 'International Applications Supervisor',
      description: 'Cura valetudo peior. Porro alioqui avaritia confido aeternus corrupti. Amissio ambitus audentia canonicus rerum soleo hic ab clementia.\n' +
        'Absorbeo acceptus vapulus enim valde vallum assentator depereo tui. Comptus corrumpo non commodo et bis. Agnitio doloribus censura surgo curo alienus arguo voluptates.\n' +
        'Umquam capio undique confero capillus fugiat desipio uxor templum argentum. Doloremque deorsum nostrum tam voluptate theatrum certe debitis. Vitae crebro ab corroboro apto talus spoliatio creptio.',
      address: '992 Sherman Ville',
      city: 'North Nia',
      state: 'Maine',
      zipCode: '78617'
    },
    {
      id: '01a665fe-dd3b-494d-8d01-df08783e7a3a',
      companyName: 'Jaskolski - Cruickshank',
      title: 'Future Marketing Associate',
      description: 'Crinis vere aegre tergiversatio clibanus demitto cursim. Vigilo spectaculum curiositas quaerat at commodo caelum amaritudo conatus. Peccatus canonicus conforto amaritudo deripio tabesco usus cunabula theatrum.\n' +
        'Capillus communis cotidie clarus vinco stipes basium correptius creo angustus. Corrumpo saepe reiciendis vicissitudo sollicito suus sulum. Auditor paens defleo blanditiis angulus somniculosus.\n' +
        'Attonbitus quaerat surculus demoror sperno creptio voluptatibus. Cado circumvenio stillicidium tracto tabesco assentator vapulus harum aduro. Stillicidium summisse civis bos stultus.',
      address: '658 W 6th Street',
      city: 'South Sanfordstead',
      state: 'Colorado',
      zipCode: '28326'
    },
    {
      id: '6eb24e83-2d5f-4e87-801e-71cbf15271ef',
      companyName: 'Monahan, Stark and Steuber',
      title: 'Dynamic Identity Analyst',
      description: 'Velum utilis bos advoco coma. Argentum abscido suppellex auditor adsidue angulus spero esse ea vigor. Contra amita crur celo molestias abstergo absens similique.\n' +
        'Stillicidium defaeco decerno pax totidem desparatus ait debilito. Curto civitas contigo vulgivagus ab. Vesco solitudo volutabrum tutamen tres aut demergo.\n' +
        'Creta compello deleo celo auctus vorago adsidue cauda aduro tamdiu. Tersus cado una terminatio soluta. Minima tibi ducimus vox valens decimus depromo celo addo.',
      address: '7337 Donnelly Tunnel',
      city: 'Pompano Beach',
      state: 'New Mexico',
      zipCode: '01999-0480'
    },
    {
      id: 'a0be5825-28b3-4f3d-91a3-f4556265eee4',
      companyName: 'Rath - Larkin',
      title: 'Lead Directives Coordinator',
      description: 'Beatae defluo deficio defero abstergo aut congregatio quis. Amicitia occaecati crapula sequi valens fuga tertius thalassinus conitor. Tot curriculum paens enim praesentium stella derideo quam ipsam.\n' +
        'Arcus creo video ultio video thermae uter deripio. Temeritas facilis contabesco tergeo adulescens. Paulatim caput supellex varietas tabula derideo stella complectus velut harum.\n' +
        'Deorsum ubi aperio quam amplus incidunt solium est venio cultellus. Tempore terra suadeo saepe alo. Arx vehemens angelus auctus comes voluntarius.',
      address: '42825 W 10th Street',
      city: 'Ernestinatown',
      state: 'Vermont',
      zipCode: '73318'
    },
    {
      id: '3bb0b564-e2b9-446b-a510-d1e22938acdd',
      companyName: 'Ondricka, Renner and Rempel',
      title: 'Customer Identity Assistant',
      description: 'Adiuvo infit conforto. Sodalitas capitulus sono agnosco cito denuo. Conforto deduco adflicto certus.\n' +    
        'Pax cornu adiuvo aro tero capio balbus. Vero iusto desidero decor ago basium autem amplexus damno barba. Unus argentum verbera.\n' +
        'Vir cuppedia accusantium comitatus bonus apud adulatio adhuc sollicito tener. Fuga attollo sequi. Pariatur creo peccatus tamdiu cubicularis.',
      address: '38438 Ernser Isle',
      city: 'New Edenworth',
      state: 'New York',
      zipCode: '93117-4909'
    },
    {
      id: 'e7c4a58b-dfe2-44d3-9d72-b5ee7b8a4d01',
      companyName: 'Abernathy Group',
      title: 'Chief Assurance Architect',
      description: 'Cena deprimo deleo urbs tantillus cimentarius adeo tredecim careo assentator. Id conspergo trado cotidie impedit defleo. Delicate sapiente corrumpo adstringo strenuus adduco reprehenderit stabilis.\n' +
        'Recusandae cuppedia cimentarius animadverto triumphus atavus voveo fuga crepusculum. Beatae texo statim contra alienus copiose nisi solio. Vestrum accusamus decumbo advoco.\n' +
        'Deleo attero terror defessus aufero cotidie statua quia tremo bonus. Caelum accedo thymbra. Sumptus deinde patruus.',   
      address: '74197 Brown Wells',
      city: 'Lonnyfurt',
      state: 'Michigan',
      zipCode: '13275-0191'
    },
    {
      id: '60043ef2-2456-4e57-b132-48fcf48b7899',
      companyName: 'Muller Group',
      title: 'Forward Integration Director',
      description: 'Beneficium sub cubicularis avaritia villa defleo. Animadverto nulla atrox amet terga cupiditate totidem speculum cum. Architecto demonstro terga viridis supra urbs solus.\n' +
        'Facere doloremque vel depereo utilis qui unus. Cum tantillus bis. Odit canto coruscus neque denique carmen casso.\n' +  
        'Substantia terebro atrox atrocitas consequuntur candidus admitto corporis spero coerceo. Uter avaritia vere decipio illum. Animi venia addo.',
      address: '83972 Bosco Prairie',
      city: 'Evanston',
      state: 'Georgia',
      zipCode: '99975'
    }
  ]

export default jobs;
