<script lang="ts">
	import ImageModal from '../../imageModal.svelte';
	import PhotoLoader from '../../photoLoader.svelte';
	import { imageModalStore } from '$lib/stores/imageModal';

	const openImage = (imageSrc: string): void => {
		imageModalStore.openModal(imageSrc);
	};

	let photos = [
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704780/_MG_9582_p71xdd.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704761/_MG_7205_sfb7h3.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704768/_MG_7663_posvvp.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704783/IMG_7068_euhvzr.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704758/_MG_0624_cksxm9.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704781/_MG_9638_iulkhr.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704758/_MG_0091_ejmpwp.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704765/_MG_7479_sbscmg.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704768/_MG_7661_ujnfqp.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704762/_MG_7231_ny3sec.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704763/_MG_7281_a21awj.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704775/_MG_9017_xorkdr.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704760/_MG_7081_advllc.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704764/_MG_7409_tvydvn.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704783/IMG_9596_wsrvst.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704767/_MG_7558_tq6ioh.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704765/_MG_7494_sdibpk.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704762/_MG_7238_edeneq.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704784/IMG_9731_l0xga8.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704771/_MG_8200_dairjl.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704781/_MG_9606_wuy2oj.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704773/_MG_8530_ibfvbq.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704770/_MG_8199_js4kqj.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704778/_MG_9203_p5okun.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704772/_MG_8412_uwdla1.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704776/_MG_9105_gpqzon.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704772/_MG_8206_tv3qin.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704782/_MG_9863_ualbbo.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704761/_MG_7183_ggfeut.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704763/_MG_7265_xf07oo.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704767/_MG_7549_oycbqs.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704778/_MG_9206_azuxyd.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704777/_MG_9201_juy5of.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704770/_MG_8096_nofjr0.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704773/_MG_8930_i8p2hk.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704769/_MG_8028_lggctz.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704759/_MG_0805_mcw94v.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704779/_MG_9227_iieumv.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704759/_MG_0895_myuiep.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704776/_MG_9121_rlj0zf.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704774/_MG_8987_x1tsmg.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704764/_MG_7311_zcguav.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704779/_MG_9220_rz6v7k.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704760/_MG_0967_kzktks.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1733704766/_MG_7515_ers8aj.jpg' }
	];
</script>

<PhotoLoader {photos}>
	<div class="mt-4 columns-2 gap-3 sm:mr-12 lg:columns-3">
		{#each photos as image}
			<img
				src={image.image}
				class="mb-3"
				alt="horizontal study"
				onclick={() => openImage(image.image)}
			/>
		{/each}
	</div>
</PhotoLoader>

<ImageModal />
