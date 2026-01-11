<script lang="ts">
	let showMovies = true;
	let showAlbums = true;
	let showTV = true;

	const movie_images = [
		{ src: 'https://image.tmdb.org/t/p/original/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg', year: 2010 },
		{ src: 'https://image.tmdb.org/t/p/original/ygGmAO60t8GyqUo9xYeYxSZAR3b.jpg', year: 2010 },
		{ src: 'https://image.tmdb.org/t/p/original/4yIQq1e6iOcaZ5rLDG3lZBP3j7a.jpg', year: 2011 },
		{ src: 'https://image.tmdb.org/t/p/original/A5MP1guV8pbruieG0tnpPIbaJtt.jpg', year: 2011 },
		{ src: 'https://image.tmdb.org/t/p/original/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg', year: 2012 },
		{ src: 'https://image.tmdb.org/t/p/original/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg', year: 2012 },
		{ src: 'https://image.tmdb.org/t/p/original/o2jT5jQdKh1HAF0fMKuGwBOwOYB.jpg', year: 2013 },
		{ src: 'https://image.tmdb.org/t/p/original/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg', year: 2013 },
		{ src: 'https://image.tmdb.org/t/p/original/7fn624j5lj3xTme2SgiLCeuedmO.jpg', year: 2014 },
		{ src: 'https://image.tmdb.org/t/p/original/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg', year: 2014 },
		{ src: 'https://image.tmdb.org/t/p/original/3ndAx3weG6KDkJIRMCi5vXX6Dyb.jpg', year: 2015 },
		{ src: 'https://image.tmdb.org/t/p/original/1BfTsk5VWuw8FCocAhCyqnRbEzq.jpg', year: 2015 },
		{ src: 'https://image.tmdb.org/t/p/original/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg', year: 2016 },
		{ src: 'https://image.tmdb.org/t/p/original/ljRRxqy2aXIkIBXLmOVifcOR021.jpg', year: 2016 },
		{ src: 'https://image.tmdb.org/t/p/original/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg', year: 2017 },
		{ src: 'https://image.tmdb.org/t/p/original/tYzFuYXmT8LOYASlFCkaPiAFAl0.jpg', year: 2017 },
		{ src: 'https://image.tmdb.org/t/p/original/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg', year: 2018 },
		{ src: 'https://image.tmdb.org/t/p/original/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg', year: 2018 },
		{ src: 'https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg', year: 2019 },
		{ src: 'https://image.tmdb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg', year: 2019 },
		{ src: 'https://image.tmdb.org/t/p/original/6jmppcaubzLF8wkXM36ganVISCo.jpg', year: 2020 },
		{ src: 'https://image.tmdb.org/t/p/original/jdmagxKK7g2rPkdltC7Kga2MBbp.jpg', year: 2020 },
		{ src: 'https://image.tmdb.org/t/p/original/dxraF0qPr1OEgJk17ltQTO84kQF.jpg', year: 2021 },
		{ src: 'https://image.tmdb.org/t/p/original/d5NXSklXo0qyIYkgV94XAgMIckC.jpg', year: 2021 },
		{ src: 'https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg', year: 2022 },
		{ src: 'https://image.tmdb.org/t/p/original/u68AjlvlutfEIcpmbYpKcdi09ut.jpg', year: 2022 },
		{ src: 'https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg', year: 2023 },
		{ src: 'https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg', year: 2023 },
		{ src: 'https://image.tmdb.org/t/p/original/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg', year: 2024 },
		{ src: 'https://image.tmdb.org/t/p/original/2E1x1qcHqGZcYuYi4PzVZjzg8IV.jpg', year: 2024 },
		{ src: 'https://image.tmdb.org/t/p/original/firAhZA0uQvRL2slp7v3AnOj0ZX.jpg', year: 2025 },
		{ src: 'https://image.tmdb.org/t/p/original/qTvFWCGeGXgBRaINLY1zqgTPSpn.jpg', year: 2025 }
	];
	const album_images = [
		{
			src: 'https://albumartexchange.com/coverart/_tn/ka/kanyewest_mybeautifuldarktwist_dph1.jpg',
			name: 'My Beautiful Dark <br />Twisted Fantasy',
			artist: 'Kanye West',
			year: '2010'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/be/beachhouse_teendream_io55.jpg',
			name: 'Teen Dream',
			artist: 'Beach House',
			year: '2010'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/ad/adele_21_i9nz.jpg',
			name: '21',
			artist: 'Adele',
			year: '2011'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/dr/drake_takecare_dvsc.jpg',
			name: 'Take Care',
			artist: 'Drake',
			year: '2011'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/ke/kendricklamar_goodkidmaadcity_h0z9.jpg',
			name: 'good kid, M.A.A.D. city',
			artist: 'Kendrick Lamar',
			year: '2012'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/fr/frankocean_channelorange_dvyv.jpg',
			name: 'Channel Orange',
			artist: 'Frank Ocean',
			year: '2012'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/em/eminem_themarshalmatherslp2_9w18.jpg',
			name: 'Marshall Mathers LP 2',
			artist: 'Eminem',
			year: '2013'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/ka/kanyewest_yeezus_ehfm.jpg',
			name: 'Yeezus',
			artist: 'Kanye West',
			year: '2013'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/fr/freddiegibbsmadlib_piata_73oa.jpg',
			name: 'Piñata',
			artist: 'Freddie Gibbs & Madlib',
			year: '2014'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/ru/runthejewels_runthejewels2_8g4a.jpg',
			name: 'Run the Jewels 2',
			artist: 'Run The Jewels',
			year: '2014'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/ke/kendricklamar_topimpabutterfly_dwxx.jpg',
			name: 'To Pimp a Butterfly',
			artist: 'Kendrick Lamar',
			year: '2015'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/th/theweeknd_beautybehindthemadne_g4td.jpg',
			name: 'Beauty Behind the Madness',
			artist: 'The Weeknd',
			year: '2015'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/ka/kanyewest_thelifeofpablo_esnb.jpg',
			name: 'The Life of Pablo',
			artist: 'Kanye West',
			year: '2016'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/fr/frankocean_blonde_h7zs.jpg',
			name: 'Blonde',
			artist: 'Frank Ocean',
			year: '2016'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/ty/tylerthecreator_flowerboy_9o8v.jpg',
			name: 'Flower Boy',
			artist: 'Tyler The Creator',
			year: '2017'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/sz/sza_ctrl_izxj.jpg',
			name: 'Ctrl',
			artist: 'SZA',
			year: '2017'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/ca/cardib_invasionofprivacycle_amgn.jpg',
			name: 'Invasion of Privacy',
			artist: 'Cardi B',
			year: '2018'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/tr/travisscott_astroworld_b04y.jpg',
			name: 'Astroworld',
			artist: 'Travis Scott',
			year: '2018'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/bi/billieeilish_whenweallfallasleepw_egra.jpg',
			name: 'When We All Fall Asleep, <br />Where Do We Go?',
			artist: 'Billie Eilish',
			year: '2019'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/ty/tylerthecreator_igor_bwdy.jpg',
			name: 'Igor',
			artist: 'Tyler The Creator',
			year: '2019'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/th/thestrokes_thenewabnormal_cxz5.jpg',
			name: 'The New Abnormal',
			artist: 'The Strokes',
			year: '2020'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/fr/freddiegibbsthealche_alfredo_d6cm.jpg',
			name: 'Alfredo',
			artist: 'Freddie Gibbs <br />& The Alchemist',
			year: '2020'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/ol/oliviarodrigo_sour_ij7w.jpg',
			name: 'Sour',
			artist: 'Olivia Rodrigo',
			year: '2021'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/ja/japanesebreakfast_jubilee_e94c.jpg',
			name: 'Jubilee',
			artist: 'Japanese Breakfast',
			year: '2021'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/ke/kendricklamar_mrmoralethebigsteppe_f61i.jpg',
			name: 'Mr. Morale and The Big Steppers',
			artist: 'Kendrick Lamar',
			year: '2022'
		},
		{
			src: 'https://upload.wikimedia.org/wikipedia/en/d/de/Steve_Lacy_-_Gemini_Rights.png',
			name: 'Gemini Rights',
			artist: 'Steve Lacy',
			year: '2022'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/za/zachbryan_zachbryan_ghpw.jpg',
			name: 'Zach Bryan',
			artist: 'Zach Bryan',
			year: '2023'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/bo/boygenius_therecord_icit.jpg',
			name: 'the record',
			artist: 'boygenius',
			year: '2023'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/do/doechii_alligatorbitesneverh_i4d5.jpg',
			name: 'Alligator Bites Never Heal',
			artist: 'Doechii',
			year: '2024'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/ch/charlixcx_brat_hm4q.jpg',
			name: 'Brat',
			artist: 'Charli XCX',
			year: '2024'
		},
		{
			src: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Dijon_Baby.jpeg',
			name: 'Baby',
			artist: 'Dijon',
			year: '2025'
		},
		{
			src: 'https://albumartexchange.com/coverart/_tn/cl/clipse_letgodsortemout_icr0.jpg',
			name: 'Let God Sort Em Out',
			artist: 'Clipse',
			year: '2025'
		}
	];
	const tv_images = [
		{
			src: 'https://artworks.thetvdb.com/banners/posters/81189-10.jpg',
			name: 'Breaking Bad',
			year: '2008-2013'
		},
		{
			src: 'https://artworks.thetvdb.com/banners/posters/121361-4.jpg',
			name: 'Game of Thrones',
			year: '2011-2019'
		},
		{
			src: 'https://artworks.thetvdb.com/banners/series/338186/posters/62089567.jpg',
			name: 'Succession',
			year: '2018-2023'
		},
		{
			src: 'https://artworks.thetvdb.com/banners/posters/305288-4.jpg',
			name: 'Stranger Things',
			year: '2016-2025'
		},
		{
			src: 'https://artworks.thetvdb.com/banners/posters/313999-2.jpg',
			name: 'Atlanta',
			year: '2016-2022'
		},
		{
			src: 'https://artworks.thetvdb.com/banners/posters/95011-3.jpg',
			name: 'Modern Family',
			year: '2009-2020'
		},
		{
			src: 'https://artworks.thetvdb.com/banners/posters/275274-2.jpg',
			name: 'Rick and Morty',
			year: '2013-'
		},
		{
			src: 'https://artworks.thetvdb.com/banners/v4/series/153021/posters/60fd8577d1a96.jpg',
			name: 'The Walking Dead',
			year: '2010-2022'
		},
		{
			src: 'https://artworks.thetvdb.com/banners/posters/253463-4.jpg',
			name: 'Black Mirror',
			year: '2011-'
		},
		{
			src: 'https://artworks.thetvdb.com/banners/posters/282254-6.jpg',
			name: 'BoJack Horseman',
			year: '2014-2020'
		},
		{
			src: 'https://artworks.thetvdb.com/banners/v4/series/360261/posters/61ca158605238.jpg',
			name: 'Euphoria',
			year: '2019-'
		},
		{
			src: 'https://m.media-amazon.com/images/I/61t9ie31jgL._AC_UF894,1000_QL80_.jpg',
			name: 'Attack on Titan',
			year: '2013-2023'
		},
		{
			src: 'https://artworks.thetvdb.com/banners/posters/94571-7.jpg',
			name: 'Community',
			year: '2009-2015'
		},
		{
			src: 'https://artworks.thetvdb.com/banners/posters/270915-21.jpg',
			name: 'Peaky Blinders',
			year: '2013-2022'
		},
		{
			src: 'https://artworks.thetvdb.com/banners/series/347721/posters/5e9b2dc18d4fa.jpg',
			name: 'The Last Dance',
			year: '2020'
		},
		{
			src: 'https://artworks.thetvdb.com/banners/v4/series/371028/posters/617f6a8c59e8f.jpg',
			name: 'Arcane',
			year: '2021-2024'
		},
		{
			src: 'https://artworks.thetvdb.com/banners/posters/5c5c402b075cc.jpg',
			name: 'The Boys',
			year: '2019-2026'
		},
		{
			src: 'https://artworks.thetvdb.com/banners/v4/series/371980/posters/61bc6bbbea3f4.jpg',
			name: 'Severance',
			year: '2022-'
		},
		{
			src: 'https://artworks.thetvdb.com/banners/series/387115/posters/5f6dbc7a694a9.jpg',
			name: "Queen's Gambit",
			year: '2020'
		},
		{
			src: 'https://artworks.thetvdb.com/banners/posters/287247-2.jpg',
			name: "Schitt's Creek",
			year: '2015-2020'
		},
		{
			src: 'https://artworks.thetvdb.com/banners/posters/260449-3.jpg',
			name: 'Vikings',
			year: '2013-2020'
		},
		{
			src: 'https://artworks.thetvdb.com/banners/posters/247808-6.jpg',
			name: 'Suits',
			year: '2011-2019'
		},
		{
			src: 'https://artworks.thetvdb.com/banners/v4/series/329089/posters/61d7484341f02.jpg',
			name: 'Ozark',
			year: '2017-2022'
		},
		{
			src: 'https://artworks.thetvdb.com/banners/v4/series/383203/posters/61010b6167190.jpg',
			name: 'Ted Lasso',
			year: '2020-'
		}
	];
</script>

<h1>dear mom, <br /><br /></h1>
<h1>the following is a list of movies, albums, and TV that released in the years 2010 to 2025.</h1>
<br />
<h1>
	this list is a rebuttal to your consistent claim that <br /> "my generation doesn't have any good...
	(insert art form here)".
</h1>
<br />
<h1>
	please note that just because you don't <em>like</em> a piece of art <br /> or haven't
	<em>heard</em> of it, doesn't mean it's not culturally significant. <br />
	pulp fiction <em class="font-bold">is</em> still important to your generation.
</h1>
<br />

<p>
	as you and john both scroll through this list, I hope both of <br />your hearts sink when you
	realize how much good art <br /> has been made
	<span class="font-bold italic">in MY generation.</span>
</p>

<h1 class="mt-12 mb-2 text-4xl">movies</h1>
<p class="mb-2 text-sm italic">
	two from each year. only one marvel movie: Guardians of the Galaxy.
</p>
<div class="flex flex-wrap gap-4">
	{#each movie_images as image}
		<div>
			<img src={image.src} alt="" class="w-48 rounded-xl" />
			<p class="mt-1 text-center text-lg italic">{image.year}</p>
		</div>
	{/each}
</div>

<h1 class="mt-12 mb-2 text-4xl">albums</h1>
<p class="mb-2 text-sm italic">two from each year.</p>
<div class="flex flex-wrap gap-4">
	{#each album_images as image}
		<div>
			<img src={image.src} alt="" class="w-48 rounded-lg" />
			<p class="text-center text-lg">{@html image.artist}</p>
			<p class="my-1 text-center text-xs italic">{@html image.name}</p>
			<p class="mb-4 text-center text-xs">{image.year}</p>
		</div>
	{/each}
</div>

<h1 class="mt-12 mb-2 text-4xl">TV</h1>
<p class="mb-2 text-sm italic">
	twenty four series that had more than half of their series air after 2010.
</p>
<div class="flex flex-wrap gap-4">
	{#each tv_images as image}
		<div>
			<img src={image.src} alt="" class="w-48 rounded-lg" />
			<p class="my-1 text-center text-xl font-semibold">{image.name}</p>
			<p class="mb-4 text-center">{image.year}</p>
		</div>
	{/each}
</div>

<p class="mt-6">
	there is more art released in the last 15 years than you or I could ever consume in a lifetime. <br
	/>
	sure, things are different yes, but there is stil great art being produced every year at a high level
	by
	<br />
	so many talented and hardworking individuals, teams, and groups. <br />
	plus, if things were the same, you'd be talking about how we "copied your generation" 😉
</p>
