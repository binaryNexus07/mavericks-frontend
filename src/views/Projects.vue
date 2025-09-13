<template>
  <div class="projects">
    <!-- Hero Section -->
    <section class="hero-section position-relative">
      <div class="hero-background">
        <img src="/images/project-img/drone.jpg" alt="Projects Banner" class="w-100">
        <div class="hero-overlay"></div>
      </div>
      
      <div class="container position-relative">
        <div class="row min-vh-50 align-items-center">
          <div class="col-12 text-center">
            <div class="hero-content text-white">
              <h1 class="display-4 fw-bold mb-4">Our Projects</h1>
              <p class="lead">Innovative robotics and IoT solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Content -->
    <section class="projects-content py-5">
      <div class="container">
        <!-- Filter Section -->
        <div class="row mb-5">
          <div class="col-12">
            <div class="filter-section text-center">
              <div class="btn-group" role="group">
                <button 
                  type="button" 
                  class="btn"
                  :class="activeFilter === 'all' ? 'btn-primary' : 'btn-outline-primary'"
                  @click="setFilter('all')"
                >
                  All Projects
                </button>
                <button 
                  type="button" 
                  class="btn"
                  :class="activeFilter === 'completed' ? 'btn-primary' : 'btn-outline-primary'"
                  @click="setFilter('completed')"
                >
                  Completed
                </button>
                <button 
                  type="button" 
                  class="btn"
                  :class="activeFilter === 'in-progress' ? 'btn-primary' : 'btn-outline-primary'"
                  @click="setFilter('in-progress')"
                >
                  In Progress
                </button>
                <button 
                  type="button" 
                  class="btn"
                  :class="activeFilter === 'upcoming' ? 'btn-primary' : 'btn-outline-primary'"
                  @click="setFilter('upcoming')"
                >
                  Upcoming
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="row g-4">
          <div 
            class="col-lg-4 col-md-6" 
            v-for="(project, index) in filteredProjects" 
            :key="index"
          >
            <div class="project-card h-100">
              <div class="project-image position-relative">
                <img :src="project.image" :alt="project.title" class="w-100">
                <div class="project-overlay">
                  <span class="badge" :class="getStatusClass(project.status)">
                    {{ project.status }}
                  </span>
                </div>
                <div class="project-actions">
                  <button 
                    class="btn btn-light btn-sm"
                    @click="viewProject(project)"
                  >
                    <i class="fas fa-eye"></i>
                  </button>
                </div>
              </div>
              
              <div class="project-content p-4">
                <h5 class="mb-2">{{ project.title }}</h5>
                <p class="text-muted mb-3">{{ project.description }}</p>
                
                <div class="project-tech mb-3">
                  <span 
                    v-for="tech in project.technologies.slice(0, 3)" 
                    :key="tech" 
                    class="badge bg-secondary me-1"
                  >
                    {{ tech }}
                  </span>
                  <span v-if="project.technologies.length > 3" class="badge bg-light text-dark">
                    +{{ project.technologies.length - 3 }} more
                  </span>
                </div>
                
                <div class="project-meta d-flex justify-content-between align-items-center">
                  <small class="text-muted">
                    <i class="fas fa-calendar me-1"></i>
                    {{ project.date || 'Ongoing' }}
                  </small>
                  <small class="text-muted">
                    <i class="fas fa-users me-1"></i>
                    {{ project.teamSize || 'Team Project' }}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- No Projects Message -->
        <div v-if="filteredProjects.length === 0" class="text-center py-5">
          <i class="fas fa-folder-open fa-4x text-muted mb-3"></i>
          <h4 class="text-muted">No projects found</h4>
          <p class="text-muted">No projects match the selected filter criteria.</p>
        </div>
      </div>
    </section>

    <!-- Project Categories -->
    <section class="categories-section py-5 bg-light">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-12">
            <h2 class="display-5 fw-bold mb-3">Project Categories</h2>
            <p class="lead text-muted">Explore different types of projects we work on</p>
          </div>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-3 col-md-6" v-for="(category, index) in categories" :key="index">
            <div class="category-card text-center p-4 h-100">
              <div class="category-icon mb-3">
                <i :class="category.icon" class="text-primary fa-3x"></i>
              </div>
              <h5 class="mb-2">{{ category.title }}</h5>
              <p class="text-muted">{{ category.description }}</p>
              <div class="category-count">
                <span class="badge bg-primary">{{ category.count }} Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Modal -->
    <div class="modal fade" id="projectModal" tabindex="-1" ref="projectModal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ selectedProject?.title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body" v-if="selectedProject">
            <div class="row">
              <div class="col-md-6">
                <img :src="selectedProject.image" :alt="selectedProject.title" class="img-fluid rounded">
              </div>
              <div class="col-md-6">
                <h6>Description</h6>
                <p class="text-muted">{{ selectedProject.description }}</p>
                
                <h6>Technologies Used</h6>
                <div class="mb-3">
                  <span 
                    v-for="tech in selectedProject.technologies" 
                    :key="tech" 
                    class="badge bg-secondary me-1 mb-1"
                  >
                    {{ tech }}
                  </span>
                </div>
                
                <h6>Status</h6>
                <span class="badge" :class="getStatusClass(selectedProject.status)">
                  {{ selectedProject.status }}
                </span>
                
                <div class="mt-3">
                  <h6>Project Details</h6>
                  <ul class="list-unstyled">
                    <li><strong>Start Date:</strong> {{ selectedProject.startDate || 'Not specified' }}</li>
                    <li><strong>Team Size:</strong> {{ selectedProject.teamSize || 'Variable' }}</li>
                    <li><strong>Duration:</strong> {{ selectedProject.duration || 'Ongoing' }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { iot_projects } from '@/data'
import { Modal } from 'bootstrap'

export default {
  name: 'Projects',
  setup() {
    const activeFilter = ref('all')
    const selectedProject = ref(null)
    const projectModal = ref(null)
    let modal = null

    const projects = ref([
      ...iot_projects,
      {
        title: "Autonomous Line Follower",
        description: "A robot that follows a line autonomously using infrared sensors and PID control.",
        image: "https://i.ytimg.com/vi/nzZRsMbKrvo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCLu74H9OFALokEbga54JWWQuXg5Q",
        technologies: ["Arduino", "PID Control", "Infrared Sensors", "DC Motors"],
        status: "Completed",
        date: "2024-01-15",
        teamSize: "3 members",
        startDate: "2023-12-01",
        duration: "1.5 months"
      },
      {
        title: "Smart Irrigation System",
        description: "IoT-based irrigation system that monitors soil moisture and controls water flow automatically.",
        image: "/images/project-img/drone.jpg",
        technologies: ["ESP32", "Soil Moisture Sensor", "Relay Module", "Mobile App"],
        status: "In Progress",
        date: "2024-02-01",
        teamSize: "4 members",
        startDate: "2024-01-15",
        duration: "3 months"
      },
      {
        title: "Gesture Controlled Robot",
        description: "A robot that can be controlled using hand gestures captured by a camera.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwPkPmBV9rUD18aJwm6tZmzdpnvIbp-7M_ew&s",
        technologies: ["Python", "OpenCV", "Arduino", "Bluetooth"],
        status: "Upcoming",
        date: "2024-04-01",
        teamSize: "5 members",
        startDate: "2024-03-15",
        duration: "2 months"
      }
    ])

    const categories = [
      {
        icon: 'fas fa-robot',
        title: 'Robotics',
        description: 'Autonomous robots and mechanical systems',
        count: 8
      },
      {
        icon: 'fas fa-microchip',
        title: 'IoT',
        description: 'Internet of Things and smart systems',
        count: 6
      },
      {
        icon: 'fas fa-mobile-alt',
        title: 'Mobile Apps',
        description: 'Android and iOS applications',
        count: 4
      },
      {
        icon: 'fas fa-brain',
        title: 'AI/ML',
        description: 'Artificial Intelligence and Machine Learning',
        count: 3
      }
    ]

    const filteredProjects = computed(() => {
      if (activeFilter.value === 'all') {
        return projects.value
      }
      
      const statusMap = {
        'completed': 'Completed',
        'in-progress': 'In Progress',
        'upcoming': 'Upcoming'
      }
      
      return projects.value.filter(project => project.status === statusMap[activeFilter.value])
    })

    const setFilter = (filter) => {
      activeFilter.value = filter
    }

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

    const viewProject = (project) => {
      selectedProject.value = project
      if (modal) {
        modal.show()
      }
    }

    onMounted(() => {
      modal = new Modal(projectModal.value)
    })

    return {
      activeFilter,
      selectedProject,
      projectModal,
      projects,
      categories,
      filteredProjects,
      setFilter,
      getStatusClass,
      viewProject
    }
  }
}
</script>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
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
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.hero-content {
  z-index: 1;
}

.project-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.project-image {
  height: 200px;
  overflow: hidden;
}

.project-image img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  top: 10px;
  right: 10px;
}

.project-actions {
  position: absolute;
  bottom: 10px;
  right: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-actions {
  opacity: 1;
}

.category-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
}

.filter-section .btn-group {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  overflow: hidden;
}

.filter-section .btn {
  border-radius: 0;
  border: none;
  padding: 10px 20px;
}

.filter-section .btn:first-child {
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
}

.filter-section .btn:last-child {
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}
</style> 