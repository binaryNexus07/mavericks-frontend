<template>
  <div id="app" :class="{ 'notice-bar-hidden': noticeBarClosed }">
    <Navbar />
    <NoticeBar @close="handleNoticeClose" />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import NoticeBar from '@/components/NoticeBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    NoticeBar,
    Footer
  },
  setup() {
    const noticeBarClosed = ref(false)

    const handleNoticeClose = () => {
      noticeBarClosed.value = true
    }

    return {
      noticeBarClosed,
      handleNoticeClose
    }
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  margin-top: 140px; /* Navbar (80px) + NoticeBar (60px) = 140px */
  transition: margin-top 0.3s ease;
}

/* When notice bar is hidden, reduce main margin to just navbar height */
.notice-bar-hidden main {
  margin-top: 80px; /* Just navbar height */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  main {
    margin-top: 155px; /* Navbar (80px) + NoticeBar (75px) = 155px */
  }
  
  .notice-bar-hidden main {
    margin-top: 80px;
  }
}

@media (max-width: 480px) {
  main {
    margin-top: 165px; /* Navbar (80px) + NoticeBar (85px) = 165px */
  }
  
  .notice-bar-hidden main {
    margin-top: 80px;
  }
}
</style> 