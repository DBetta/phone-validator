package com.jumia.phone.customer;

import java.util.regex.Pattern;

/**
 * @author Denis Gitonga
 */
public enum Country {
    CAMEROON("Cameroon", "+237", Pattern.compile("\\(237\\)\\ ?[2368]\\d{7,8}$")),
    ETHIOPIA("Ethiopia", "+251", Pattern.compile("\\(251\\)\\ ?[1-59]\\d{8}$")),
    MOROCCO("Morocco", "+212", Pattern.compile("\\(212\\)\\ ?[5-9]\\d{8}$")),
    MOZAMBIQUE("Mozambique", "+258", Pattern.compile("\\(258\\)\\ ?[28]\\d{7,8}$")),
    UGANDA("Uganda", "+256", Pattern.compile("\\(256\\)\\ ?\\d{9}$"));

    private final String name;
    private final String code;
    private final Pattern regex;

    Country(String name, String code, Pattern regex) {
        this.name = name;
        this.code = code;
        this.regex = regex;
    }

    public String getName() {
        return name;
    }

    public String getCode() {
        return code;
    }

    public Pattern getRegex() {
        return regex;
    }
}
