import store from '../store/index.js'
import * as naviboard from 'naviboard';

let { commit, state } = store

history.replaceState({el: 'zipper'}, 'zipper')

function handleKeydown(e){
    const element = naviboard.getActiveElement(), classes = element.className, 
    section = document.querySelector('.section'), activeSection = state.activeSection
    switch(e.key){
        case 'SoftRight':
            commit('changeSection')
            setTimeout(()=>{
                commit('changeSection')
            }, 300)
            break;
        case 'ArrowDown':
        case 'ArrowUp':
            section.scrollTop = element.getBoundingClientRect().top - 88
            setSoftkeys(classes)
            break;
        case 'ArrowLeft':
            if(element.tagName !== 'INPUT' && activeSection === 'unzip'){
                commit('changeSection')
                setSoftkeys(classes)
                setTimeout(()=>setSoftkeys(naviboard.getActiveElement().className), 50)
            }
            break;
        case 'ArrowRight':
            if(element.tagName !== 'INPUT' && activeSection === 'zip'){
                commit('changeSection')
                setSoftkeys(classes)
                setTimeout(()=>setSoftkeys(naviboard.getActiveElement().className), 50)
            }
            break;
        case 'Backspace':
            if(element.tagName !== 'INPUT'){
                history.back();
            }
            break;
    }
}

function setSoftkeys(classes){
    switch(classes){
        case 'section__button navigable':
            commit('changeSoftkeys', {left: '', center: 'SELECT', right: 'Refresh'})
            break;
        case 'section__input navigable':
            commit('changeSoftkeys', {left: '', center: '', right: 'Refresh'})
            break;
        case 'section__item navigable':
            commit('changeSoftkeys', {left: '', center: 'REMOVE', right: 'Refresh'})
            break;
    }
}

export default document.addEventListener('keydown', handleKeydown)