<template>
  <div>
    <client-only>
      <h1 class="mb-5">{{$t('speaker')}}</h1>
      <div v-if="!isWork">{{$t('browserNotSupport')}}</div>
      <v-form
        v-else 
        class='col-6'
        @submit.prevent="speak(text)"
      >
        <v-select
          :items="voices"
          v-model="selectedVoice"
          item-text="voiceURI"
          item-value="voiceURI"
          :label="$t('selectVoice')"
          :loading="!voices.length"
          outlined
          dense
          return-object
        />
        <v-textarea
          v-model="text"
          @keydown.enter="speak(text)"
          outlined
          name="input-7-4"
          :label="$t('enterText')"
        ></v-textarea>
        <v-btn
          block
          type="submit"
        >
          {{$t('speak')}}
        </v-btn>
      </v-form>
    </client-only>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
  export default {
    name: 'speaker',
    data: () => ({
      isWork: true,
      voices: [],
      selectedVoice: {},
      text: ""
    }),
    computed:{
      ...mapGetters('ui', ['lang'])
    },
    mounted(){
      if(!window.speechSynthesis) this.isWork = false;
      this.voices = window.speechSynthesis.getVoices();
      setTimeout(() => {
        this.voices = window.speechSynthesis.getVoices();
        this.selectedVoice = this.lang == 'en' ? this.voices[1] : this.voices[0];
        this.speak(this.$t('speakerGreeting'));
      }, 100);
    },
    methods:{
      speak(text){
        const speech = new SpeechSynthesisUtterance(text);
        speech.voice = this.selectedVoice;
        window.speechSynthesis.speak(speech);
      }
    }
  };
</script>

<style lang="scss" scoped>
[class*="col-"]{
  padding: 0 !important;
}
</style>