<template>
      <section class="section section--active" id="unzip">
        <button class="section__button navigable" tabindex="1" @click="this.$refs.unzipPicker.click()">Pick a file to unzip</button>
        <input type="file" class="section__input--hidden" ref="unzipPicker" tabindex="-1" @change="pickFile($event)">
        <button class="section__button navigable" tabindex="1" @click="unzipNdownload()">Unzip the file</button>
        <p class="section__item">
            Picked file: {{unzipFile.name ? unzipFile.name : 'none'}}
        </p>
    </section>
</template>

<script>
import * as JSZip from 'jszip';
import * as naviboard from 'naviboard';
import { saveAs } from 'file-saver';
import { mapActions, mapMutations, mapState } from "vuex";
export default {
    data(){
        return {
            zip: JSZip(),
        }
    },
    methods: {
        ...mapActions(['openError']),
        ...mapMutations(['changeUnzipFile']),
        unzipNdownload(){
            if(this.unzipFile.name){
                this.zip.loadAsync(this.unzipFile).then(unzipped=>{
                    this.changeUnzipFile({})
                    let files = unzipped.files;
                    Object.keys(files).forEach(key=>{
                        if(!unzipped.files[key].dir)
                            unzipped.file(key).async("blob")
                                .then(blob=>saveAs(blob, key))
                                    .then(()=>delete files[key])
                                        .catch(()=>{this.openError("Sorry we couldn't download the file. Try again after freeing up space.")});
                    })
                }).catch(()=>{this.openError("Sorry we couldn't download the file. Try again after freeing up space.")});
            }else this.openError("Pick a file to unzip.")
        },
        pickFile(event){
            const file = event.target.files[0],
            name = file.name,
            isZip = name.substring(name.length - 3) === 'zip'
            if(isZip){
                this.changeUnzipFile(file)
            }else {
                this.openError(`This file doesn't have an "zip" extension.`)
            }

        }
    },
    computed: {
        ...mapState(['unzipFile']),
    },
    mounted(){
        naviboard.setNavigation('unzip')
    },
    unmounted(){
        naviboard.destroyNavigation('unzip')
    }
}
</script>

<style>

</style>