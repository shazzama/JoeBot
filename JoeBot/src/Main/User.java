package Main;

import Main.Faculty.*;

/**
 * Created by georgenjoo on 2017-09-30.
 */
public class User {
    private Faculty highestPts;

    // faculty pts
    private int appSciencePts;
    private int sciencePts;
    private int artsPts;
    private int medicinePts;
    private int commercePts;
    private int educationPts;


    public User(){
        this.appSciencePts = 0;
        this.sciencePts = 0;
        this.artsPts = 0;
        this.medicinePts = 0;
        this.commercePts = 0;
        this.educationPts = 0;
    }

    // Add
    public void addAppSciencePts(int numOfPoints){
        appSciencePts += numOfPoints;
    }

    public void addSciencePts(int numOfPoints){
        sciencePts += numOfPoints;
    }

    public void addArtsPts(int numOfPoints){
        artsPts += numOfPoints;
    }

    public void addMedicinePts(int numOfPoints){
        medicinePts += numOfPoints;
    }

    public void addCommercePts(int numOfPoints){
        commercePts += numOfPoints;
    }

    public void addEducationPts(int numOfPoints){
        educationPts += numOfPoints;
    }


    // Getters
    public int getAppSciencePts(){
        return this.appSciencePts;
    }
    public int getSciencePts(){
        return this.sciencePts;
    }
    public int getArtsPts(){
        return this.artsPts;
    }
    public int getMedicinePts(){
        return this.medicinePts;
    }
    public int getCommercePts(){
        return this.commercePts;
    }
    public int getEducationPts(){
        return this.educationPts;
    }


    // more specific methods

    public void getFacultyWithHighestPts(){
        int max = 0;
        if (getAppSciencePts() > max){
            max = getAppSciencePts();
            highestPts = new AppliedScience();
        }
        if (getSciencePts() > max){
            max = getSciencePts();
            highestPts = new Science();
        }
        if (getArtsPts() > max){
            max = getArtsPts();
            highestPts = new Arts();
        }
        if (getCommercePts() > max){
            max = getCommercePts();
            highestPts = new Commerce();
        }
        if (getEducationPts() > max){
            max = getEducationPts();
            highestPts = new Education();
        }
        if (getMedicinePts() > max){
            max = getMedicinePts();
            highestPts = new Medicine();
        }
        if (max == 0) throw new NullPointerException("No points were added to any faculties");
    }


}
