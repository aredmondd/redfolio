<script lang="ts">
	import PhotoLoader from '../../photoLoader.svelte';
	import { imageModalStore } from '$lib/stores/imageModal';
	import ImageModal from '../../imageModal.svelte';

	const weeks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	const openImage = (imageSrc: string): void => {
		imageModalStore.openModal(imageSrc);
	};

	const photos = [
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856543/DSC02373_kz8e4t.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856542/DSC02423_yksw6a.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856543/DSC02385_he2ppg.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856542/DSC02446_gmbils.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856543/DSC02353_ykiw3k.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856652/DSC02487_xzhs3x.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856653/DSC02481_ogjejg.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856653/DSC02476_lbwy0q.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856654/DSC02455_rb6bue.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856652/DSC02499_t0ug3k.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856147/DSC02589_pdlk3r.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856147/DSC02514_k06dbc.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856147/DSC02531_sgmzhv.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856147/DSC02574_nopyuh.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1750856147/DSC02577_eywzfp.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1751494888/DSC02638_o6klg3.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1751494888/DSC02610_ucsrjd.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1751494888/DSC02627_tu71ya.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1751494888/DSC02630_i3jpvg.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1751494888/DSC02619_odosq4.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1752162557/DSC02661_l5rl2f.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1752162557/DSC02732_gitp47.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1752162557/DSC02719_pyvvhp.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1752162557/DSC02676_i8xck1.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1752162557/DSC02685_e0qsrk.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1752711013/DSC02851_stsrui.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1752711012/DSC02786_c4xwfe.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1752711013/DSC02834_a3hizz.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1752711012/DSC02829_oewlie.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1752711013/DSC02822_dvz2ca.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1753311628/DSC03034_qto7zs.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1753311628/DSC03004_qlzsoa.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1753311628/DSC02963_euflwn.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1753311629/DSC02916_auo0kf.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1753311628/DSC02898_ivhwov.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1753920594/DSC03130_p02sjy.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1753920594/DSC03113_k8efyw.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1753920594/DSC03055_usdqmp.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1753920594/DSC03123_mye5sc.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1753920594/DSC03174_a0ms0j.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1754431887/DSC03265_wueukv.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1754431887/DSC03316_ctaaqe.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1754431887/DSC03301_etstde.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1754431887/DSC03325_t1snnz.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1754431887/DSC03278_vt4nxq.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1755192648/DSC03351_v7as23.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1755192647/DSC03380_jidxkm.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1755192647/DSC03364_c44sci.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1755192648/DSC03346_joif2r.jpg' },
		{ image: 'https://res.cloudinary.com/dkznczrj0/image/upload/v1755192647/DSC03410_edygye.jpg' }
	];
</script>

<PhotoLoader {photos}>
	<div class="mr-12 flex overflow-x-auto">
		{#each weeks as week}
			<div class="flex flex-col justify-between gap-2 px-4">
				{#each photos.slice(week * 5, (week + 1) * 5) as photo}
					<img
						src={photo.image}
						class="w-32"
						onclick={() => {
							openImage(photo.image);
						}}
					/>
				{/each}
			</div>
		{/each}
	</div>
</PhotoLoader>

<ImageModal />
