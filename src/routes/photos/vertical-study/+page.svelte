<script lang="ts">
	import PhotoLoader from '../../photoLoader.svelte';
	import { imageModalStore } from '$lib/stores/imageModal';
	import ImageModal from '../../imageModal.svelte';

	const openImage = (imageSrc: string): void => {
		imageModalStore.openModal(imageSrc);
	};

	const photos = [
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606171/DSC01267_khu9u9.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606146/DSC01794_kd7ihj.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606179/chris-8_x4ilnp.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606174/DSC00693_yooaw1.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606150/DSC01694_jexbst.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606174/DSC00637_qjadnj.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606173/DSC01216_nlvccp.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606149/DSC01707_flz38a.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606161/DSC01556_vyijwu.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606148/DSC01746_bhcquj.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606161/DSC01532_zlfm1a.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606167/DSC01359_fkfv3d.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606173/DSC01004_wbfabr.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606176/DSC00317_i6fe7i.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606182/chris-11_zdb55o.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606176/DSC00422_btl117.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606167/DSC01371_xqyyti.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606146/DSC01789_jagdcu.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606169/DSC01330_n8wdw0.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606165/DSC01389_oqgpiq.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606179/chris-6_gecuir.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606327/dawg_rk7wdw.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606169/DSC01338_srvbzj.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606147/DSC01772_flxrp8.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606150/DSC01692_jq0kqt.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606148/DSC01747_o7ozih.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606145/DSC01837_yxliwu.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606175/DSC00433_hfbr8e.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606164/DSC01401_kqslb1.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606170/DSC01283_zarncd.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606178/chris-9_k9b7ar.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606168/DSC01341_xvncar.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606171/DSC01268_hrxeqv.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606149/DSC01698_agpnph.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606176/DSC00374_jlsjhm.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606165/DSC01388_wa5vdk.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606147/DSC01761_k3zr6w.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606146/DSC01776_rl1tmv.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606161/DSC01568_hqckt7.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606160/DSC01574_hvanu5.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606168/DSC01345_fbbczj.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606150/DSC01691_lkvypl.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606172/DSC01229_q22rjl.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606164/DSC01411_hgkqik.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606152/DSC01632_l2pymr.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606178/DSC00303_psdkyx.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606180/chris-3_dq3qde.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606151/DSC01656_kwwqhv.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606161/DSC01559_nq4xj9.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750606164/DSC01529_jkgjse.jpg' }
	];
</script>

<PhotoLoader {photos}>
	<div class="mt-4 columns-2 gap-3 sm:mr-12 lg:columns-3">
		{#each photos as image}
			<img
				src={image.image}
				class="mb-3"
				alt="vertical study"
				onclick={() => {
					openImage(image.image);
				}}
			/>
		{/each}
	</div>
</PhotoLoader>

<ImageModal />
