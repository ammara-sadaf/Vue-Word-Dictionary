<template>
  <div>
    <h1>Word Dictionary</h1>
    <b-row>
      <b-col cols="4"></b-col>
      <b-col cols="4">
        <b-form-input
          v-model="word"
          placeholder="Enter a word"
          size="lg"
          class="custom-input-form"
        />
        <b-button
          variant="success"
          :disabled="!word"
          @click="getDefinition"
          class="my-3 custom-search-button"
        >
          Search
        </b-button>
        <br />
        <b-card
          title="Verb"
          tag="article"
          style="max-width: 100%; background-color: #e1f5fe"
          class="my-2"
        >
          <b-card-text>
            {{ verbMeaning }}
          </b-card-text>
        </b-card>
        <b-card
          title="Noun"
          tag="article"
          style="max-width: 100%; background-color: #ede7f6"
          class="my-2"
        >
          <b-card-text>
            {{ nounMeaning }}
          </b-card-text>
        </b-card>
      </b-col>
      <b-col cols="4"></b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      word: "",
      verbMeaning: "",
      nounMeaning: "",
      // phonetics: [],
      // verb: [],
      // noun: [],
      // adjective: [],
      // adverb: [],
      // preposition: [],
    };
  },
  methods: {
    async getDefinition() {
      await axios
        .get("https://api.dictionaryapi.dev/api/v2/entries/en/" + this.word)
        .then((response) => {
          // handle success
          this.verbMeaning =
            response.data[0]?.meanings[0].definitions[0].definition;
          this.nounMeaning =
            response.data[0]?.meanings[1].definitions[0].definition;
          // this.phonetics = response?.data[0]?.phonetics;
          // response?.data[0]?.meanings.map((item) => {
          //   this.verb = item.partOfSpeech.find("verb");
          //   this.noun = item.partOfSpeech.find("noun");
          //   this.adjective = item.partOfSpeech.find("adjective");
          //   this.adverb = item.partOfSpeech.find("adverb");
          //   this.preposition = item.partOfSpeech.find("preposition");
          // });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      // console.log("phonetics", this.phonetics);
      // console.log("noun", this.noun);
      // console.log("verb", this.verb);
      // console.log("adjective", this.adjective);
      // console.log("adverb", this.adverb);
      // console.log("preposition", this.preposition);
    },
  },
};
</script>

<style scoped>
.custom-input-form {
  color: #607d8b;
}

.custom-search-button {
  width: 100%;
  background-color: #607d8b;
}
</style>
