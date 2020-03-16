<template>
  <v-app>
  <v-navigation-drawer v-model="drawer" fixed>
  <v-toolbar flat color="transparent">
    <v-toolbar-title>Menu</v-toolbar-title>
  </v-toolbar>
  <v-divider></v-divider>
   <v-list>
   <v-list-group
     v-for="item in items"
     :key="item.title"
     v-model="item.active"
     :prepend-icon="item.icon"
     no-action
   >
    <template v-slot:activator>
     <v-list-tile>
       <v-list-tile-content>
         <v-list-tile-title>{{item.title}}</v-list-tile-title>
       </v-list-tile-content>
     </v-list-tile>
    </template>

    <v-list-tile
     v-for="subItems in item.subItems"
     :key="subItems.title"
     :to="subItems.to"
    >
      <v-list-tile-content>
        <v-list-tile-title>{{subItems.title}}</v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-icon>{{subItems.icon}}</v-icon>
      </v-list-tile-action>
    </v-list-tile>
   </v-list-group>
    </v-list>
  </v-navigation-drawer>

    <v-toolbar color="lime">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>DongminKim</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          active: true,
          subItems: [
            {
              title: 'card',
              to: '/lecture/card'
            },
            {
              title: 'layout',
              to: '/lecture/layout'
            }
          ]
        },
        {
          icon: 'mdi-file-document-box-outline',
          title: 'Project',
          to: '/project'
        },
        {
          icon: 'mdi-ticket',
          title: 'Activity',
          to: '/activity'
        },
        {
          icon: 'mdi-information-outline',
          title: 'About',
          to: 'about'
        }
      ]
    }
  },
  methods: {
    test () {
    }
  }
}
</script>
