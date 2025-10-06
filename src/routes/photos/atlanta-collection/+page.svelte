<script lang="ts">
	import PhotoLoader from '../../photoLoader.svelte';
	import { imageModalStore } from '$lib/stores/imageModal';
	import ImageModal from '../../imageModal.svelte';

	const openImage = (imageSrc: string): void => {
		imageModalStore.openModal(imageSrc);
	};

	const photos = [
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1759101700/DSC03820_sey3wu.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1759102070/DSC03745_ci3hb8.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1759101699/DSC03844_bnyafa.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1758820584/DSC03299_n5n2t1.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1759101699/DSC03851_uzt0xt.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1758820585/DSC03165_cud0vi.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1758820579/DSC03727_mphvai.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1759101700/DSC03798_lz5jft.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1758820584/DSC03437_jx64gj.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1759101700/DSC03834_v4chud.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1758820590/DSC02807_bzcdot.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1758820579/DSC03576_thuyld.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1758820578/DSC03779_eitn5t.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1759101699/DSC03880_evmei1.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1759101699/DSC03870_kiqg39.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1758820585/DSC03189_waxve7.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1758820579/DSC03749_rtbh1j.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1759101699/DSC03874_ijrt8g.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1758820579/DSC03778_pf3pro.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1759101700/DSC03806_rvf7ob.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1758820585/DSC03215_bhmyzy.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1758820584/DSC03465_foxfm7.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1758820589/DSC03001_yodc5l.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1758820589/DSC03046_xypadb.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1758820579/DSC03661_m6dmtd.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1758820590/DSC02774_tgdpoq.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1759101700/DSC03829_gkzcgr.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1759101699/DSC03854_me1v6t.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1758820585/DSC03060_gqdzaz.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1758820589/DSC02920_dobhi3.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1758820579/DSC03581_xqpbyf.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1759779636/DSC03994_cyeqnr.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1759779636/DSC03957_dxlugv.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1759779636/DSC03982_xwanbp.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1759779636/DSC03903_vulhq6.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1759779636/DSC04035_tbb87m.jpg' }

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
