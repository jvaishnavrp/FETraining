import App from './app.js';
import bannerCarouselComponent from './banner-carousel.js';
import bannerVideoComponent from './banner-video.js';
import newFn from './new.js';
import headerFn from './header.js';
import projectLeads from './project-leads.js';
import successStoriesFn from './success-stories-banner.js';

const app = new App();

const bannerCarouselSlider = bannerCarouselComponent();

const plasticBannerVideoComp = bannerVideoComponent();
const newFnComp = newFn();
const headerComponent = headerFn();
const projectLeadsComponent = projectLeads();
const successStoriesComponent = successStoriesFn();
