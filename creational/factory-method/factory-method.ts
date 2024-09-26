// First of all we have an interviewer interface and some implementations for it
interface Interviewer {
  askQuestions(): void;
}

class Developer implements Interviewer {
  askQuestions(): void {
    console.log("Asking about design patterns!");
  }
}

class CommunityExecutive implements Interviewer {
  askQuestions(): void {
    console.log("Asking about community building");
  }
}

// Now let us create our HiringManager
abstract class HiringManager {
  // Factory method
  protected abstract makeInterviewer(): Interviewer;

  public takeInterview(): void {
    const interviewer = this.makeInterviewer();
    interviewer.askQuestions();
  }
}

// Now any child can extend it and provide the required interviewer
class DevelopmentManager extends HiringManager {
  protected makeInterviewer(): Interviewer {
    return new Developer();
  }
}

class MarketingManager extends HiringManager {
  protected makeInterviewer(): Interviewer {
    return new CommunityExecutive();
  }
}

const devManager = new DevelopmentManager();
devManager.takeInterview(); // Output: Asking about design patterns!

const marketingManager = new MarketingManager();
marketingManager.takeInterview(); // Output: Asking about community building.
