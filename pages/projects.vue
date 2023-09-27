<template>
           <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'>
<div class="mid">
    <div class="right">
        <b> <div class="txt4"> <span class="abouttxt">{{ $t('projects') }}</span>
                    <div class="hr4"> <hr style="border: none; border-top: 2px solid rgb(0, 0, 0);"></div>
                    </div></b>
                    <div class="projects">
                        <div class="projects1"><b>{{ $t('projectsname') }}</b>
                        <button> <a href="https://github.com/dagtekin00/Kullanici-Veri-Girisi">{{ $t('projectsbtn') }}</a></button></div>
                        <div class="projects1"><b>Dino Game</b>
                            <button> <a href="https://github.com/dagtekin00/Dino-Game">{{ $t('projectsbtn') }}</a></button>  </div>
                        <div class="projects1">{{ $t('dotnet') }}<b></b>
                            <button> <a href="https://github.com/dagtekin00/Dotnet-Proje">{{ $t('projectsbtn') }}</a></button></div>
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