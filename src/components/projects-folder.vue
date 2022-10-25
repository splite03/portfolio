<template>
    <div class="folder-projects">
        <div class="folder-header"
        @mousedown.prevent="
        $store.state.window = 'folder',
        $store.state.grabed = true"
        @dblclick="$emit('fullscreenFolder')">
            <div class="header-buttons">
                <div class="header-btn hide-folder" style="position:static"
                    @mouseup="$store.commit('afterClick', '.hide-folder')"
                    @mousedown="$store.commit('preClick', '.hide-folder')"></div>
                <div class="header-btn fullscreen-folder" style="position:static"
                    @mouseup="$store.commit('afterClick', '.fullscreen-folder'),
                    $emit('fullscreenfolder')"
                    @mousedown="$store.commit('preClick', '.fullscreen-folder')"></div>
                <div class="header-btn close-folder" style="position:static"
                    @mouseup="$store.commit('afterClick', '.close-folder'), 
                    $store.state.folderOpened = false,
                    $store.state.window = undefined"
                    @mousedown="$store.commit('preClick', '.close-folder')"></div>
            </div>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>