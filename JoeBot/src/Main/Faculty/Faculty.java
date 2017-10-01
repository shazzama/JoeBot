package Main.Faculty;

import Main.Specializations.Specialization;

import java.util.LinkedList;

/**
 * Created by georgenjoo on 2017-09-30.
 */
public abstract class Faculty {
    public String name;
    private LinkedList<Specialization> specs;

    public String getFacultyName(){
        return this.name;
    }

}
