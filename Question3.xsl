<?xml version = "1.0" ?>
<xsl:stylesheet version="1.0" xmlns:xsl = "http://www.w3.org/1999/XSL/Transform" xmlns ="http://www.w3.org/1999/xhtml">

<xsl:output method = "xml" indent = "yes" encoding = "UTF-8" />
    <xsl:template match="/patron">
        <html>
            <head>
                <title>Q3</title>
            </head>
            <body>
                <h1>
                    <xsl:text>Patron Record: </xsl:text>
                    <xsl:value-of select="name" />
                </h1>
                <br />
                <table>
                    <tr>
                        <td><xsl:text>Title</xsl:text></td>
                        <td><xsl:text>Authors</xsl:text></td>
                        <td><xsl:text>Call Number</xsl:text></td>
                        <td><xsl:text>Due</xsl:text></td>
                        <td><xsl:text>Overdue</xsl:text></td>
                    </tr>
                    <xsl:for-each select="item">
                        <tr>
                            <td><xsl:value-of select="title" /></td>
                            <td><xsl:value-of select="authors" /></td>
                            <td><xsl:value-of select="number" /></td>
                            <td><xsl:value-of select="due" /></td>
                            <xsl:if test="@overdue = 'yes'">
                                <td><xsl:text>Yes</xsl:text></td>
                            </xsl:if>
                            <xsl:if test="@overdue = 'no'">
                                <td><xsl:text>No</xsl:text></td>
                            </xsl:if>
                            
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>

