package ru.brandmaker.testUsers.dao;

public class ExtResult {
    private boolean success;
    private Object data;


    public ExtResult(boolean success, Object data) {
        this.success = success;
        this.data = data;
    }

    public ExtResult() {
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
