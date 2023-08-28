
const data = [
	{
		id: 1,
		image:
			'https://codideep.com/img/blogpost/imagenportada/201811200000001.png',
		title: 'Que es un sistema de control de versiones?',
		category: 'Introduccion',
		description: 'Un sistema de control de versiones es una tecnologia que nos permite registrar los cambios realizados en un archivo o en un conjunto de archivos a lo largo del tiempo con el fin de que podamos restaurar ciertas versiones de estos archivos, estos archivos pueden ser de cualquier tipo ademas de contar con la ventaja de poder recuperar versiones anteriores de los archivos o proyectos.',
		date: 'Published on Dec 17, 2021',
		ReadingTime: '5 min read',
	},
	{
		id: 2,
		image:
			'https://static-00.iconduck.com/assets.00/subversion-icon-2048x1484-1pysgqkz.png',
		title: 'VCS locales',
		category: 'Tipos',
		description:
			'Dentro de los VCS existen los de tipo local, estos sistemas se basan en una pequeña base de datos local, la cual se encarga de almacenar los cambios en los archivos. Como ejemplo de estos sistemas se nos hace mencion del sistema RCS el cual fue usado por MAC OS, esta sistema funcionaba poniendo parches en los archivos con los cambios generados.',
		date: 'Published on Dec 14, 2021',
		ReadingTime: '3 min read',
	},
	{
		id: 3,
		image:
			'https://www.nettix.com.pe/wp-content/uploads/2020/02/img-1024x511.png',
		title: 'VCS centralizados',
		category: 'Tipos',
		description:
			'Con los sistemas VCS locales habia un problema, el cual era que habia la necesidad de colaborar con otros desarrolladores, por lo que se desarrollaron sistemas centralizados como son el caso de CVS, Subversion y Perfore. Estos sistemas tienen un unico servidor el cual controla las versiones de los archivos y los usuarios pueden descargar estos archivos. Al ser un unico servidor obviamente su desventaja recae en este punto, donde puede llegar a parar el servicio hasta perder todos los datos por problemas del servidor.',
		date: 'Published on Sep 06, 2021',
		ReadingTime: '4 min read'
	},
	{
		id: 4,
		image:
			'https://wac-cdn.atlassian.com/dam/jcr:56587a16-e96f-49f2-b302-74c3e90d1199/Distributed-Architecture-article.png?cdnVersion=1176',
		title: 'VCS distribuidos',
		category: 'Tipos',
		description:
			'Por ultimo llegamos a los sistemas distribuidos (categoria donde entraria git) que solucionan los problemas de los centralizados al hacer que cada usuario del proyecto tenga una copia entera del repositorio localmente por si es necesario recuperarlo. Bastante parecido a los sistemas P2P. Ademas podemos tener varios flujos de trabajo segun los ocupemos.',
		date: 'Published on Jun 09, 2021',
		ReadingTime: '3 min read',
	},
	{
		id: 5,
		image:
			'https://www.appcodemia.com/wp-content/uploads/2021/05/git-logo-1.png',
		title: 'Por que usamos GIT?',
		category: 'Git',
		description:
			'A dia de hoy git es uno de los sistemas de control de versionas mas usados por los desarrolladores y si bien este guarda muchas similitudes con otros VCS, hay caracteristicas que hacen unico a git, por ejemplo: Git no almacena las modificaciones si no que toma instantanea al archivo modificado y guarda una referencia a esa copia en su BD ademas de que git hace casi todas sus operaciones de manera local consultando su BD sobre los cambios lo cual generan menos impacto de tiempo al momento de desarrollar.Ademas de esto git cuenta con caracteristicas como lo son su integridad o su modo de trabajo de 3 estados',
		date: 'Published on May 16, 2021',
		ReadingTime: '10 min read',
	},
	{
		id: 6,
		image:
			'https://www.mediasource.mx/hubfs/blog-files/conclusion.png',
		title: 'Conclusion',
		category: 'Conclusion',
		description:
			'Es importante conocer las tecnologías de control de versiones porque permiten gestionar y rastrear cambios en archivos y proyectos de manera eficiente. Esto facilita la colaboración, la recuperación de versiones anteriores y la integridad de los datos en el desarrollo de software y otros proyectos, lo que ahorra tiempo y evita errores costosos. Además, el conocimiento de estas tecnologías es fundamental en el entorno de desarrollo moderno, donde Git, en particular, desempeña un papel central',
		date: 'Published on May 16, 2021',
		ReadingTime: '10 min read',
	},
];

export default data;