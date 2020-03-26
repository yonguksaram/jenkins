public with sharing class Jenkins {
    @AuraEnabled
    public static String getGreeting() {
        return 'hello';
    }
}