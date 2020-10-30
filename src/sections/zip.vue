<template>
    <section class="section section--active" id="zip">
        <input type="text" class="section__input navigable" tabindex="1" v-model="title" placeholder="File name">
        <button class="section__button navigable" tabindex="1" @click="this.$refs.zipInput.click()">Pick files to zip</button>
        <input type="file" class="section__input--hidden" tabindex="-1" ref="zipInput" @change="addFile($event)">
        <button class="section__button navigable" tabindex="1" @click="zipNdownload()">Zip the files</button>
        <ul class="section__list">
            <li class="section__item" v-if="zipFiles.length > 0">Files selected: </li>
            <li v-for="(file, i) in zipFiles" :key="file.date">
                <button class="section__item navigable" tabindex="1" @click="deleteFile(i)">
                    {{file.name}}
                </button>
            </li>
        </ul>
    </section>
</template>

<script>
import * as JSZip from 'jszip';
import * as naviboard from 'naviboard';
import { saveAs } from 'file-saver';
import { mapMutations, mapState, mapActions } from "vuex";
export default {
    data(){
        return {
            zip: JSZip(),
        }
    },
    methods: {
        ...mapActions(['openError']),
        ...mapMutations(['updateZipFileTitle', 'addZipFile', 'removeZipFiles', 'deleteZipFile']),
        zipNdownload(){
            
            for(let i = this.zipFiles.length; i--;){
                let file = this.zipFiles[i]
                this.zip.file(file.name, file)
            }
            this.zip.generateAsync({type: "blob"})
                .then(blob=>saveAs(blob, this.zipFileTitle === '' ? 'unnamed.zip' : this.zipFileTitle+'.zip' ))
                    .then(()=>{this.removeZipFiles();this.updateZipFileTitle('')})
                        .catch(()=>this.openError("Sorry we couldn't download the file. Try again later. Try again after freeing up space."));
        },
        addFile(event){
            const file = event.target.files[0]
            this.addZipFile(file);
            naviboard.refreshNavigation('zip', status)
        },
        deleteFile(index){
            this.deleteZipFile(index);
            naviboard.refreshNavigation('zip', status)
        }
    },
    computed: {
        ...mapState(['activeSection', 'zipFiles', 'zipFileTitle']),
        title: {
            get() {
                return this.zipFileTitle
            },
            set(value) {
                this.updateZipFileTitle(value)
            }
        }
    },
    mounted(){
        naviboard.setNavigation('zip')
    },
    unmounted(){
        naviboard.destroyNavigation('zip')
    }
}
</script>

<style>

</style>