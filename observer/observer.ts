class JobPost {
  protected title: string;

  constructor(title: string) {
    this.title = title;
  }

  getTitle(): string {
    return this.title;
  }
}

interface Observer {
  onJobPosted(job: JobPost): void;
}

class JobSeeker implements Observer {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  onJobPosted(job: JobPost): void {
    // Do something with the job posting
    console.log(`Hi ${this.name}! New job posted: ${job.getTitle()}`);
  }
}

interface Observable {
  // notify(jobPosting: JobPost): void;
  subscribe(observer: Observer): void;
  addJob(jobPosting: JobPost): void;
}

class EmploymentAgency implements Observable {
  protected observers: Observer[] = [];

  protected notify(jobPosting: JobPost): void {
    for (const observer of this.observers) {
      observer.onJobPosted(jobPosting);
    }
  }

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  addJob(jobPosting: JobPost): void {
    this.notify(jobPosting);
  }
}

// Create subscribers
const johnDoe = new JobSeeker("John Doe");
const janeDoe = new JobSeeker("Jane Doe");

// Create publisher and attach subscribers
const jobPostings = new EmploymentAgency();
jobPostings.subscribe(johnDoe);
jobPostings.subscribe(janeDoe);

// Add a new job and see if subscribers get notified
jobPostings.addJob(new JobPost("Software Engineer"));

// Output
// Hi John Doe! New job posted: Software Engineer
// Hi Jane Doe! New job posted: Software Engineer
