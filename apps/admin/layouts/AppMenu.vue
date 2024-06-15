<script setup>
import { ref } from 'vue';
import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    // {
    //     label: 'Home',
    //     items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
    // },
	{
        label: 'Editor',
        items: [
			{
				label: 'Content',
				items: [
					{
						label: 'New',
						icon: 'pi pi-fw pi-plus'
					}
				]
			},
			{
				label: 'Assets',
				items: [
					{
						label: 'New',
						icon: 'pi pi-fw pi-plus'
					}
				]
			},
		]
    },
	{
		label: 'Collaborators',
		items: [
			{
				label: 'New',
				icon: 'pi pi-fw pi-plus'
			}
		]
	},
	{
		label: 'Project',
		items: [
			{
				label: 'New',
				icon: 'pi pi-fw pi-plus'
			}
		]
	},
    {
        label: 'Components',
        items: [
            //
        ]
    },
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
			<li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
