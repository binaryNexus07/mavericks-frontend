<template>
  <div class="home">
    <!-- Registration Popup Component -->
    <!-- <RegistrationPopup /> -->

    <!-- Hero Section with Image Slider -->
    <section class="hero-section position-relative">
      <!-- Image Slider -->
      <div class="hero-slider">
        <div 
          v-for="(slide, index) in heroSlides" 
          :key="index"
          class="hero-slide"
          :class="{ active: currentSlide === index }"
        >
          <div class="hero-background">
            <img :src="slide.image" :alt="slide.title" class="w-100">
            <div class="hero-overlay"></div>
          </div>
          
          <div class="container position-relative">
            <div class="row min-vh-100 align-items-center">
              <div class="col-lg-6">
                <div class="hero-content text-white">
                  <h1 class="display-4 fw-bold mb-4 animate-fade-in">
                    {{ slide.title }}
                  </h1>
                  <p class="lead mb-4 animate-fade-in-delay">
                    {{ slide.description }}
                  </p>
                  <div class="hero-buttons animate-fade-in-delay-2">
                    <router-link :to="slide.primaryButton.link" class="btn btn-primary btn-lg me-3">
                      {{ slide.primaryButton.text }}
                    </router-link>
                    <router-link :to="slide.secondaryButton.link" class="btn btn-outline-light btn-lg">
                      {{ slide.secondaryButton.text }}
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Slider Navigation -->
      <div class="slider-nav">
        <button class="slider-btn prev" @click="previousSlide">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="slider-btn next" @click="nextSlide">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      
      <!-- Slider Indicators -->
      <div class="slider-indicators">
        <button 
          v-for="(slide, index) in heroSlides" 
          :key="index"
          class="indicator"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
        ></button>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section py-5">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-12">
            <h2 class="display-5 fw-bold mb-3">Why Choose Team Mavericks?</h2>
            <p class="lead text-muted">Discover what makes us unique in the world of robotics and innovation</p>
          </div>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-4 col-md-6" v-for="(feature, index) in features" :key="index">
            <div class="feature-card text-center p-4 h-100">
              <div class="feature-icon mb-3">
                <i :class="feature.icon" class="text-primary"></i>
              </div>
              <h4 class="mb-3">{{ feature.title }}</h4>
              <p class="text-muted">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Faculty Advisors Section -->
    <section class="faculty-section py-5">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-12">
            <h2 class="display-5 fw-bold mb-3">Faculty Advisors</h2>
            <p class="lead text-muted">Guiding us towards excellence with their expertise and mentorship</p>
          </div>
        </div>
        
        <div class="row g-4 justify-content-center">
          <div class="col-lg-6 col-md-8" v-for="(faculty, index) in facultyAdvisors" :key="index">
            <div class="faculty-card d-flex align-items-center p-4 bg-white rounded shadow-sm h-100">
              <div class="faculty-image me-4">
                <img :src="faculty.image" :alt="faculty.name" class="rounded-circle" width="120" height="120">
              </div>
              <div class="faculty-details">
                <h5 class="mb-1">{{ faculty.name }}</h5>
                <p class="text-primary mb-2">{{ faculty.designation }}</p>
                <p class="text-muted mb-2">{{ faculty.department }}</p>
                <p class="text-muted small">{{ faculty.qualification }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Highlights Section -->
    <section class="team-highlights py-5 bg-light">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-12">
            <h2 class="display-5 fw-bold mb-3">Meet Our Core Team</h2>
            <p class="lead text-muted">Leadership team guiding Team Mavericks towards excellence</p>
          </div>
        </div>
        
        <div class="row g-4 justify-content-center">
          <div class="col-lg-2 col-md-4 col-sm-6" v-for="(member, index) in coordinators" :key="index">
            <div class="team-card text-center">
              <div class="member-image mb-3">
                <img :src="member.img_url" :alt="member.name" class="rounded-circle" width="120" height="120">
              </div>
              <h5 class="mb-2">{{ member.name }}</h5>
              <p class="text-primary mb-2">{{ member.designation }}</p>
              <p class="text-muted small">{{ member.branch }}</p>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-5">
          <router-link to="/teams" class="btn btn-primary btn-lg">
            View Full Team
          </router-link>
        </div>
      </div>
    </section>

    <!-- Projects Preview Section -->
    <section class="projects-preview py-5">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-12">
            <h2 class="display-5 fw-bold mb-3">Latest Projects</h2>
            <p class="lead text-muted">Explore our innovative robotics and IoT projects</p>
          </div>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-4 col-md-6" v-for="(project, index) in featuredProjects" :key="index">
            <div class="project-card h-100">
              <div class="project-image">
                <img :src="project.image" :alt="project.title" class="w-100">
                <div class="project-overlay">
                  <span class="badge" :class="getStatusClass(project.status)">
                    {{ project.status }}
                  </span>
                </div>
              </div>
              <div class="project-content p-4">
                <h5 class="mb-2">{{ project.title }}</h5>
                <p class="text-muted mb-3">{{ project.description }}</p>
                <div class="project-tech">
                  <span v-for="tech in project.technologies.slice(0, 3)" :key="tech" 
                        class="badge bg-secondary me-1">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-5">
          <router-link to="/projects" class="btn btn-outline-primary btn-lg">
            View All Projects
          </router-link>
        </div>
      </div>
    </section>

    <!-- Events Section -->
    <section class="events-section py-5 bg-light">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-12">
            <h2 class="display-5 fw-bold mb-3">Upcoming Events</h2>
            <p class="lead text-muted">Join us for exciting workshops and competitions</p>
          </div>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-6" v-for="(event, index) in upcomingEvents" :key="index">
            <div class="event-card d-flex p-4 bg-white rounded shadow-sm">
              <div class="event-date me-4 text-center">
                <div class="date-day">{{ formatDate(event.date).day }}</div>
                <div class="date-month">{{ formatDate(event.date).month }}</div>
              </div>
              <div class="event-details">
                <h5 class="mb-2">{{ event.title }}</h5>
                <p class="text-muted mb-2">{{ event.description }}</p>
                <span class="badge" :class="getStatusClass(event.status)">
                  {{ event.status }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { members, iot_projects, events, coordintors } from '@/data'
import RegistrationPopup from '@/components/RegistrationPopup.vue'

export default {
  name: 'Home',
  components: {
    RegistrationPopup
  },
  setup() {
    const currentSlide = ref(0)
    let slideInterval = null

    const heroSlides = [
      {
        image: "/images/team-heading.jpg",
        title: "Collaborative Innovation",
        description: "Working together as a team to create amazing robotics solutions and push the boundaries of technology.",
        primaryButton: { text: "Join Our Team", link: "/contact" },
        secondaryButton: { text: "View Events", link: "/gallery" }
      },
      {
        image: "https://res.cloudinary.com/dhr8bs4xg/image/upload/v1745911380/Picsart_25-01-30_22-05-49-726_ngvrvz.jpg",
        title: "Welcome to Team Mavericks",
        description: "A premier robotics club dedicated to fostering innovation, creativity, and technical excellence among students through hands-on projects and collaborative learning.",
        primaryButton: { text: "Learn More", link: "/about" },
        secondaryButton: { text: "View Projects", link: "/projects" }
      },
      {
        image: "/images/mav-banner.png",
        title: "Welcome to Team Mavericks",
        description: "A premier robotics club dedicated to fostering innovation, creativity, and technical excellence among students through hands-on projects and collaborative learning.",
        primaryButton: { text: "Learn More", link: "/about" },
        secondaryButton: { text: "View Projects", link: "/projects" }
      }
      
    ]

    const features = [
      {
        icon: 'fas fa-robot fa-3x',
        title: 'Hands-on Learning',
        description: 'Get practical experience with real robotics projects and cutting-edge technology.'
      },
      {
        icon: 'fas fa-users fa-3x',
        title: 'Collaborative Environment',
        description: 'Work with like-minded students in a supportive and innovative community.'
      },
      {
        icon: 'fas fa-trophy fa-3x',
        title: 'Competition Success',
        description: 'Participate in national and international robotics competitions.'
      },
      {
        icon: 'fas fa-graduation-cap fa-3x',
        title: 'Skill Development',
        description: 'Learn programming, electronics, mechanical design, and problem-solving skills.'
      },
      {
        icon: 'fas fa-lightbulb fa-3x',
        title: 'Innovation Focus',
        description: 'Develop creative solutions to real-world problems through robotics.'
      },
      {
        icon: 'fas fa-network-wired fa-3x',
        title: 'Industry Connections',
        description: 'Connect with professionals and companies in the robotics industry.'
      }
    ]

    const featuredMembers = computed(() => members.slice(0, 4))
    const featuredProjects = computed(() => iot_projects.slice(0, 3))
    const upcomingEvents = computed(() => events.filter(event => event.status === 'Upcoming').slice(0, 2))

    // Get coordinators with full details from members array
    const coordinators = computed(() => {
      const coordinatorNames = ['Kumar Sparsh', 'Akanksha Armo','Vishal Kumar', 'Rashim Malhotra', 'Abhishek Yadav', 'Piyush Gupta', 'Dhairya Baranwal', 'Ankit Kumar', 'Anisha Kumari', 'Priyanshu Kumar', 'Aadarsh Nath']
      return members.filter(member => 
        coordinatorNames.some(name => member.name.includes(name.split(' ')[0]))
      ).slice(0, 10) // Limit to 10 coordinators
    })

    const facultyAdvisors = [
      {
        name: 'Prof. Mani Kant Paswan',
        designation: 'Director, SLIET',
        department: 'Patron in Chief',
        qualification: '', 
        image: '/images/MKPaswan-150x150.jpg'
      },
      {
        name: 'Prof. M.M. Sinha',
        designation: 'Dean(Student Welfare)',
        department: 'Patron',
        qualification: '',
        image: '/images/MM Sinha.png'
      },
      {
        name: 'Dr. J.S. Ubhi',
        designation: 'Professor',
        department: 'Electronics and Communication Engineering',
        qualification: '',
        image: '/images/Js_ubhi_sir.JPG'
      }
    ]

    const getStatusClass = (status) => {
      switch (status) {
        case 'Completed':
          return 'bg-success'
        case 'In Progress':
          return 'bg-warning'
        case 'Upcoming':
          return 'bg-info'
        default:
          return 'bg-secondary'
      }
    }

    const formatDate = (dateString) => {
      const date = new Date(dateString)
      return {
        day: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' })
      }
    }

    // Slider functions
    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % heroSlides.length
    }

    const previousSlide = () => {
      currentSlide.value = currentSlide.value === 0 
        ? heroSlides.length - 1 
        : currentSlide.value - 1
    }

    const goToSlide = (index) => {
      currentSlide.value = index
    }

    const startAutoPlay = () => {
      slideInterval = setInterval(() => {
        nextSlide()
      }, 5000) // Change slide every 5 seconds
    }

    const stopAutoPlay = () => {
      if (slideInterval) {
        clearInterval(slideInterval)
        slideInterval = null
      }
    }

    onMounted(() => {
      startAutoPlay()
    })

    onUnmounted(() => {
      stopAutoPlay()
    })

    return {
      currentSlide,
      heroSlides,
      features,
      featuredMembers,
      coordinators,
      featuredProjects,
      upcomingEvents,
      facultyAdvisors,
      getStatusClass,
      formatDate,
      nextSlide,
      previousSlide,
      goToSlide
    }
  }
}
</script>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
}

.hero-slider {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.hero-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
  z-index: 1;
}

.hero-slide.active {
  opacity: 1;
  z-index: 2;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.hero-background img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.hero-content {
  z-index: 1;
  position: relative;
}

.slider-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  pointer-events: none;
}

.slider-btn {
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 15px;
  border-radius: 50%;
  transition: all 0.3s ease;
  pointer-events: auto;
  backdrop-filter: blur(10px);
}

.slider-btn:hover {
  background-color: rgba(255, 255, 255, 0.4);
  transform: scale(1.1);
}

.slider-indicators {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  gap: 12px;
}

.indicator {
  width: 12px;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator:hover {
  background-color: rgba(255, 255, 255, 0.8);
  transform: scale(1.2);
}

.indicator.active {
  background-color: white;
  border-color: white;
  transform: scale(1.3);
}

.animate-fade-in {
  animation: fadeIn 1s ease-in;
}

.animate-fade-in-delay {
  animation: fadeIn 1s ease-in 0.3s both;
}

.animate-fade-in-delay-2 {
  animation: fadeIn 1s ease-in 0.6s both;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.feature-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.faculty-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e9ecef;
}

.faculty-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.faculty-image img {
  object-fit: cover;
  border: 3px solid #007bff;
  transition: transform 0.3s ease;
}

.faculty-card:hover .faculty-image img {
  transform: scale(1.05);
}

.team-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.member-image img {
  object-fit: cover;
  border: 3px solid #007bff;
  transition: transform 0.3s ease;
}

.team-card:hover .member-image img {
  transform: scale(1.05);
}

.project-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.project-image img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.project-overlay {
  position: absolute;
  top: 10px;
  right: 10px;
}

.event-card {
  transition: transform 0.3s ease;
}

.event-card:hover {
  transform: translateY(-3px);
}

.event-date {
  min-width: 80px;
}

.date-day {
  font-size: 2rem;
  font-weight: bold;
  color: #007bff;
}

.date-month {
  font-size: 1rem;
  color: #6c757d;
  text-transform: uppercase;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-slider {
    height: 70vh;
  }
  
  .slider-nav {
    padding: 0 15px;
  }
  
  .slider-btn {
    padding: 10px;
    font-size: 1.2rem;
  }
  
  .slider-indicators {
    bottom: 20px;
  }
  
  .indicator {
    width: 10px;
    height: 10px;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-content p {
    font-size: 1rem;
  }
  
  /* Adjust team cards for mobile - show 2 per row on mobile */
  .col-lg-2.col-md-4.col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (max-width: 576px) {
  .hero-slider {
    height: 60vh;
  }
  
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .hero-content .btn {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
  
  /* Show 1 card per row on very small screens */
  .col-lg-2.col-md-4.col-sm-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  
  .member-image img {
    width: 100px !important;
    height: 100px !important;
  }
}
</style> 