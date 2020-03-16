<template>
    <v-layout class="ma-4">
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-toolbar color="primary" dark>
                <v-toolbar-title>Here</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" icon>
                        <v-icon>mdi-arrange-bring-forward</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-divider></v-divider>
                <v-card-text>
                    {{card_Text}}
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                    <v-btn color="primary" flat>text1</v-btn>
                    <v-btn color="primary" flat>text2</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
  data () {
    return {
      card_Text: '안녕'
    }
  }
}
</script>
